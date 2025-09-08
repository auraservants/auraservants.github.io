
        var icon = document.getElementById("icon");

        if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        icon.src = "/images/moon.png";
        } else {
            document.body.classList.remove("light-theme");
            icon.src = "/images/sun (1).png";
        }


        icon.onclick = function() {
            document.body.classList.toggle("light-theme");

            if (document.body.classList.contains("light-theme")) {
                icon.src = "/images/moon.png";
                localStorage.setItem("theme", "light");
            } else {
                icon.src = "/images/sun (1).png";
                localStorage.setItem("theme", "dark");
            }
        }


