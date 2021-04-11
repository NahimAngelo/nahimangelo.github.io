(function(){
    const toast = document.getElementById('liveToastBtn');

    const toastElList = [].slice.call(document.querySelectorAll('.toast'))
    const toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    });

    toast.onclick = () => toastList[0].show();
})();