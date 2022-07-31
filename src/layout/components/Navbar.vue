<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container"
               @toggleClick="toggleSideBar"/>
    <div class="right-menu">
      <Dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
               class="user-avatar">
          <span class="userName">LANShare</span>
          <i class="el-icon-caret-bottom"/>
        </div>
        <DropdownMenu>
          <DropdownItem>测试</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Hamburger from '@/components/Hamburger'
import {Dropdown, DropdownMenu, DropdownItem} from 'element-ui'

export default {
  data() {
    return {}
  },
  components: {
    Hamburger,
    Dropdown,
    DropdownMenu,
    DropdownItem

  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('TOGGLE_SIDEBAR', this.sidebar.opened);
    },
    // async logout() {
    //   await this.$store.dispatch('user/logout')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    // }
  },
  computed: {
    // vuex 辅助函数 导出
    ...mapGetters([
      'sidebar'
    ])
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // transition: background .3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          // position: absolute;
          // right: -20px;
          // top: 25px;
          // font-size: 12px;
        }

        .userName {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
