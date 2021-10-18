<template>
  <li class="card-item">
    <div class="img-wrap">
      <img
        :src="require(`../../assets/img/${item.name}.jpg`)"
        :alt="item.name"
      />
      <div class="mask">
        <h1>{{ item.name }}</h1>
        <h2>{{ item.festival }}</h2>
      </div>
    </div>
    <div class="content-wrap">
      <h1>放假时间：{{ item.desc || '无建议' }}</h1>
      <h2>休假建议：{{ item.rest || '无建议' }}</h2>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: Object
  }
}
</script>

<style lang="less" scoped>
.card-item {
  border-radius: 0.15rem;
  border: 1px solid #ddd;
  color: #fff;
  overflow: hidden;
  margin-bottom: 0.15rem;
  .img-wrap {
    position: relative;
    img {
      width: 100%;
      height: 1.95rem;
    }

    .mask {
      text-align: center;
      text-shadow: 0.02rem 0.05rem 0.05rem #666;
      position: absolute;
      left: 0.05rem;
      bottom: 0.1rem;
      h1 {
        position: absolute;
        background-image: -webkit-linear-gradient(
          left,
          blue,
          #66ffff 10%,
          #cc00ff 20%,
          #cc00cc 30%,
          #ccccff 40%,
          #00ffff 50%,
          #ccccff 60%,
          #cc00cc 70%,
          #cc00ff 80%,
          #66ffff 90%,
          blue 100%
        );
        -webkit-text-fill-color: transparent; /* 将字体设置成透明色 */
        -webkit-background-clip: text; /* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
        -webkit-background-size: 200% 100%;
        -webkit-animation: masked-animation 4s linear infinite;
        font-size: 0.4rem;
      }
      h2 {
        font-size: 0.2rem;
        padding-top: 0.45rem;
      }
      @keyframes masked-animation {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: -100% 0;
        }
      }
    }
  }
  .content-wrap {
    margin: 0.1rem;
    color: #333;
    font-size: 0.15rem;
  }
}
</style>
