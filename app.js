(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        const reasonSelect = contactForm.querySelector("#contactReason");
        const serviceSelect = contactForm.querySelector("#serviceSelect");
        const uploadInput = contactForm.querySelector("#upload");
        const subjectInput = contactForm.querySelector('input[name="subject"]');

        const syncRequirements = () => {
            const isService = reasonSelect && reasonSelect.value === "Service Inquiry";
            if (serviceSelect) serviceSelect.required = isService;
            if (uploadInput) uploadInput.required = isService;
        };

        if (reasonSelect) {
            reasonSelect.addEventListener("change", syncRequirements);
        }
        syncRequirements();

        contactForm.addEventListener("submit", () => {
            const reason = reasonSelect ? reasonSelect.value : "Contact";
            const service = serviceSelect && serviceSelect.value ? serviceSelect.value : "N/A";
            if (subjectInput) {
                subjectInput.value = `[${reason}] Service: ${service}`;
            }
        });
    }
})();
