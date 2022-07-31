<template>
  <div class="has-logo">
    <Logo :collapse="isCollapse"></Logo>
    <Scrollbar wrap-class="scrollbar-wrapper">
      <Menu :collapse="isCollapse" :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText" :router="true">
        <SidebarItem></SidebarItem>
      </Menu>
    </Scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import { Menu, Scrollbar } from "element-ui";
import SidebarItem from "./SidebarItem";
import variables from "@/assets/css/variables.scss";
export default {
  components: {
    Logo,
    Menu,
    Scrollbar,
    SidebarItem,
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    variables() {
      return variables;
    },
  },
};
</script>
