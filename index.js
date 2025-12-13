   /*  SLIDER  */
        let index = 0;
        const slides = document.querySelectorAll(".slide");
        if (slides.length > 0) {
            setInterval(() => {
                slides[index].classList.remove("active");
                index = (index + 1) % slides.length;
                slides[index].classList.add("active");
            }, 2000);
        }

        /*  FREE SOLUTION SEE MORE (FIXED) */
        (function () {
            const toggleBtn = document.getElementById("toggle-see-more");
            if (!toggleBtn) return;


            const allCards = Array.from(document.querySelectorAll(".card"));

            const initiallyHidden = allCards.filter((c) =>
                c.classList.contains("hidden")
            );


            if (initiallyHidden.length === 0) {
                toggleBtn.style.display = "none";
                return;
            }


            let expanded = false;
            toggleBtn.textContent = "See more";

            toggleBtn.addEventListener("click", () => {
                expanded = !expanded;
                if (expanded) {

                    initiallyHidden.forEach((c) => c.classList.remove("hidden"));
                    toggleBtn.textContent = "See less";
                } else {

                    initiallyHidden.forEach((c) => c.classList.add("hidden"));
                    toggleBtn.textContent = "See more";
                }
            });
        })();

        /*  FREE COURSES SEE MORE (FIXED) */
        (function () {
            const fcBtn = document.getElementById("fcBtn");
            if (!fcBtn) return;

            const allFc = Array.from(document.querySelectorAll(".fc-card"));

            let initiallyHiddenFc = allFc.filter((i) =>
                i.classList.contains("fc-hidden")
            );
            if (initiallyHiddenFc.length === 0) {

                initiallyHiddenFc = Array.from(
                    document.querySelectorAll(".fc-hidden")
                );
            }

            if (initiallyHiddenFc.length === 0) {
                fcBtn.style.display = "none";
                return;
            }

            let expandedFc = false;
            fcBtn.textContent = "See more";

            fcBtn.addEventListener("click", () => {
                expandedFc = !expandedFc;
                if (expandedFc) {
                    initiallyHiddenFc.forEach((i) => i.classList.remove("fc-hidden"));
                    fcBtn.textContent = "See less";
                } else {
                    initiallyHiddenFc.forEach((i) => i.classList.add("fc-hidden"));
                    fcBtn.textContent = "See more";
                }
            });
        })();

        /*  FOOTER NAVIGATION (WORKING)  */
        (function () {
            const navButtons = document.querySelectorAll(".nav-btn");
            const pages = document.querySelectorAll(".page");

            if (navButtons.length === 0 || pages.length === 0) return;

            navButtons.forEach((btn) => {
                btn.addEventListener("click", () => {
                    navButtons.forEach((b) => b.classList.remove("active"));
                    btn.classList.add("active");

                    pages.forEach((p) => p.classList.remove("active"));
                    const target = document.getElementById(btn.dataset.page);
                    if (target) target.classList.add("active");


                    window.scrollTo({ top: 0, behavior: "instant" });
                });
            });
        })();