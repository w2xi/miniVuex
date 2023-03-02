class Store {

}

let Vue
function install(_Vue) {
  if (Vue) {
    return
  }
  Vue = _Vue
  // mixin
  Vue.mixin({ beforeCreate: vueInit })
}

function vueInit() {
  console.log(this);
  const options = this.$options
  if (options.store) {
    this.$store = options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}

export default {
  Store,
  install,
}