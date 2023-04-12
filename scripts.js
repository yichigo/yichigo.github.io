
function showTabContent(tabId) {
  const tabContents = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  document.getElementById(tabId).style.display = 'block';
  setActiveTab(tabId);
}


function setActiveTab(tabId) {
  const tabButtons = document.getElementsByClassName('tab-link');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  const activeTabButton = document.querySelector(`[onclick="showTabContent('${tabId}')"]`);
  activeTabButton.classList.add('active');
}

// Call the function to display the first tab's content by default
document.addEventListener('DOMContentLoaded', function () {
  showTabContent('recommendation');
});


function openTab(evt, tabName) {
    // 获取所有的标签页内容元素
    var tabcontent = document.getElementsByClassName("tabcontent");

    // 将所有标签页内容元素隐藏
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // 获取所有的标签按钮元素
    var tablinks = document.getElementsByClassName("tablinks");

    // 将所有标签按钮元素的类名设置为非激活状态
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 将点击的标签按钮设置为激活状态
    evt.currentTarget.classList.add("active");

    // 显示点击的标签页内容
    document.getElementById(tabName).classList.add("active");
};
