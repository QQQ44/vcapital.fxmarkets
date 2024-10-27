document.addEventListener('DOMContentLoaded', function() {
    // 实现平滑滚动
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetURL = this.href;

            // 模拟页面内容切换而不是整个页面刷新
            fetch(targetURL)
                .then(response => response.text())
                .then(html => {
                    // 将新页面内容插入到页面主体中，而不是刷新整个页面
                    document.body.innerHTML = html;
                    window.history.pushState({}, '', targetURL); // 更新 URL
                })
                .catch(err => console.error('页面加载出错: ', err));
        });
    });

    // 可以添加更多的事件监听器来实现动态交互功能
});
