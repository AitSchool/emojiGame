// let emojiArr = ['😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','😇','😐','😑','😶','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝','😒','😓','😔','😕','😲','😷','😖','😞','😟','😢','😭','😦','😧','😨','😬','😰','😱','😳','😵','😡','😠'];
// let emojiLength = 100;

// function setEmoji() {
//   let pageWrapper = document.getElementById('pageWrapper');
//   let html = '';
//   for (let i = 0; i <= emojiLength -1; i++) {
//     // let emojiIndex = i%emojiArr.length;
//     let emojiIndex = Math.floor(Math.random() * emojiArr.length);
//     let spanHtml = `<span>${emojiArr[emojiIndex]}</span>`
//     html += spanHtml
//   }
//   pageWrapper.innerHTML = html;
// }

// setEmoji();


// let emojiArr = [
//   '😀','😁','😂','😃','😄','😅','😆','😉','😊',
//   '😋','😎','😍','😘','😗','😙','😚','😇','😐',
//   '😑','😶','😏','😣','😥','😮','😯','😪','😫',
//   '😴','😌','😛','😜','😝','😒','😓','😔','😕',
//   '😲','😷','😖','😞','😟','😢','😭','😦','😧',
//   '😨','😬','😰','😱','😳','😵','😡','😠'];
// let emojiLength = 100;
// function setEmoji() {
//   let pageWrapper = document.getElementById('pageWrapper');
//   let offsetHeight  = pageWrapper.offsetHeight;
//   let offsetWidth   = pageWrapper.offsetWidth;
//   let html = '';
//   for (let i = 0; i <= emojiLength -1; i++) {
//     let randomTop = Math.floor(Math.random() * offsetHeight) + 'px';
//     let randomLeft = Math.floor(Math.random() * offsetWidth) + 'px';
//     let emojiIndex = i%emojiArr.length;
//     let animateClassName = `animate${i%4 + 1}`
//     let spanHtml = `<span class="emoji-item ${animateClassName}"
//       style="top:${randomTop};left:${randomLeft}"
//       >${emojiArr[emojiIndex]}</span>`
//     html += spanHtml
//   }
//   pageWrapper.innerHTML = html;
// }

// setEmoji();


const emojiArr = [
  '😀','😁','😂','😃','😄','😅','😆','😉','😊',
  '😋','😎','😍','😘','😗','😙','😚','😇','😐',
  '😑','😶','😏','😣','😥','😮','😯','😪','😫',
  '😴','😌','😛','😜','😝','😒','😓','😔','😕',
  '😲','😷','😖','😞','😟','😢','😭','😦','😧',
  '😨','😬','😰','😱','😳','😵','😡','😠'];
const PAGE = {
  data: {
    count: 100,
  },
  init: function() {
    this.bind();
    this.setEmoji();
  },
  bind: function() {
    let todoList = document.getElementById('pageWrapper');
    this.onEventLister(todoList,'click','random-emoji',this.resetEmoji);
  },
  onEventLister(parentNode,action,childClassName,callback) {
    parentNode.addEventListener(action,function(e){
      e.target.className.indexOf(childClassName) >= 0 && callback(e);
    })
  },
  setEmoji: function() {
    let pageWrapper = document.getElementById('pageWrapper');
    let offsetHeight = pageWrapper.offsetHeight;
    let offsetWidth = pageWrapper.offsetWidth;
    let randomIndex =  Math.floor(Math.random() * PAGE.data.count);
    let html = '';
    for (let i = 0; i <= PAGE.data.count -1; i ++) {
      let randomTop = Math.floor(Math.random() * offsetHeight) + 'px';
      let randomLeft = Math.floor(Math.random() * offsetWidth) + 'px';
      let emojiIndex = i % emojiArr.length;
      let animateClassName = `animate${i % 4 + 1}`
      let spanHtml = `<span class="emoji-item ${randomIndex === i ? 'random-emoji' : animateClassName}"
        style="top:${randomTop};left:${randomLeft}"
        >${emojiArr[emojiIndex]}</span>`
      html += spanHtml
    }
    pageWrapper.innerHTML = html;
  },
  resetEmoji: function() {
    PAGE.data.count += 50;
    PAGE.setEmoji();
  }
}

PAGE.init();