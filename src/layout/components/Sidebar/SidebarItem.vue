<template>
  <div>

    <MenuItem index="/">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">软件</span>
      </template>
    </MenuItem>

    <MenuItem index="/">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">视频</span>
      </template>
    </MenuItem>

    <MenuItem index="/">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">图片</span>
      </template>
    </MenuItem>

    <MenuItem index="/file">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">文件</span>
      </template>
    </MenuItem>

    <Submenu index="1">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">测试父级</span>
      </template>
      <MenuItem index="/file">测试</MenuItem>
    </Submenu>
    <div></div>
  </div>
</template>

<script>
import {Submenu, MenuItem, MenuItemGroup} from "element-ui";

export default {
  components: {
    Submenu,
    MenuItem,
    // MenuItemGroup,
  },
  name: "SidebarItem",
  props: {
    // route object
    // item: {
    //   type: Object,
    //   required: true,
    // },
    // isNest: {
    //   type: Boolean,
    //   default: false,
    // },
    // basePath: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = {...parent, path: "", noShowingChildren: true};
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-submenu__title {
  text-align: left;
}

.el-menu-item {
  text-align: left;
}
</style>
