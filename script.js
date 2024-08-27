document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Dummy authentication (replace this with your actual authentication logic)
        if (username === "admin" && password === "admin") {
            // Simpan informasi login di session storage
            sessionStorage.setItem("isLoggedIn", "true");

            // Redirect ke halaman tujuan
            alert("Login berhasil!");
            window.location.href = "kjnajndbyurbsfmsoHMXIHDIuhimuxjsjm12389Yy78uhnjNMUY77178t63t18nYNIH98Y73NZDA.html";
            
        } else {
            alert("Username atau password salah. Silakan coba lagi.");
        }
    });
});