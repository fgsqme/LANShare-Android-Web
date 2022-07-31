<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div  class="main-container">
      <div class="">
        <Navbar></Navbar>
        <TagsView></TagsView>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import TagsView from './components/TagsView/index.vue'


export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView
  },
  // mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/mixin.scss";
  @import "@/assets/css/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
