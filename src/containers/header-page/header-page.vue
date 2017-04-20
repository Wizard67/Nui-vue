<template>
  <header class="shadow-on">
    <button class="toggle-aside icon">
      <i class="fa fa-navicon"></i>
    </button>
    <div class="tool">
      <ul class="flex-between">
        <li>
          <form>
            <div class="dropdown">
              <button type="button">
                <span class="text">排序</span>
                <i class="fa fa-sort"></i>
              </button>
              <ul class="menu shadow-on">
                <li>
                  <a href="">排序</a>
                </li>
                <li>
                  <a href="">更新</a>
                </li>
                <li>
                  <a href="">最新</a>
                </li>
                <li>
                  <a href="">收藏</a>
                </li>
                <li>
                  <a href="">评论</a>
                </li>
              </ul>                
            </div>
          </form>            
        </li>
        <li>
          
        </li>
      </ul>
    </div>

    <button class="toggle-helper icon">
      <i class="fa fa-ellipsis-h"></i>
    </button>
  </header>
</template>

<script>
  export default {
  }
</script>