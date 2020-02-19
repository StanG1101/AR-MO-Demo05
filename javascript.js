AFRAME.registerComponent('loader', {
        init: function () {
                let loader = document.querySelector("#loadingEl")
                this.el.addEventListener('modelo-loaded', e => {
                        console.log('loaded')
                        loader.setAttribute("visible", "false")
                })
        }
});

