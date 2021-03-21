import anime from 'animejs';

const Loading = {
  duration: 250,
  async hide() {
    const dom = document.getElementById('loading');
    if (dom) {
      await anime({
        targets: dom,
        opacity: 0,
        duration: this.duration,
        easing: 'linear',
      }).finished;
      dom.style.display = 'none';
    }
  },
  async show() {
    const dom = document.getElementById('loading');
    if (dom) {
      dom.style.display = 'block';
      await anime({
        targets: dom,
        opacity: 1,
        duration: this.duration,
        easing: 'linear',
      }).finished;
    }
  },
};

export default Loading;
