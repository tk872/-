// --- ສໍາລັບແບບຟອມສະໝັກ ---
    const signupForm = document.getElementById('signup-form');
    const signupFeedback = document.getElementById('signup-feedback');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // ປ້ອງກັນບໍ່ໃຫ້ຟອມສົ່ງຂໍ້ມູນໄປ server ໂດຍກົງ

        const nameInput = document.getElementById('signup-name');
        const emailInput = document.getElementById('signup-email');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name === '' || email === '') {
            signupFeedback.textContent = 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ.';
            signupFeedback.style.color = 'red';
        } else if (!validateEmail(email)) { // Use a simple email validation function
            signupFeedback.textContent = 'ກະລຸນາປ້ອນຮູບແບບອີເມວທີ່ຖືກຕ້ອງ.';
            signupFeedback.style.color = 'red';
        } else {
            // ນີ້ແມ່ນພຽງແຕ່ການຈຳລອງການສະໝັກຝັ່ງ Client-side ເທົ່ານັ້ນ.
            // ໃນຊີວິດຈິງ, ທ່ານຈະຕ້ອງສົ່ງຂໍ້ມູນນີ້ໄປຫາ Server (backend)
            // ເພື່ອບັນທຶກລົງຖານຂໍ້ມູນ.
            signupFeedback.textContent = `ຂໍຂອບໃຈ, ${name}! ທ່ານໄດ້ສະໝັກສຳເລັດແລ້ວ.`;
            signupFeedback.style.color = 'green';
            signupForm.reset(); // ລຶບຂໍ້ມູນໃນແບບຟອມ
            console.log('User subscribed:', { name, email });

            // ທ່ານສາມາດເພີ່ມລະຫັດ AJAX/Fetch API ຢູ່ທີ່ນີ້
            // ເພື່ອສົ່ງຂໍ້ມູນໄປຫາ Backend Server
            // fetch('/api/subscribe', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email })
            // }).then(response => response.json())
            //   .then(data => console.log(data))
            //   .catch(error => console.error('Error:', error));
        }
    });

    // ຟັງຊັນງ່າຍໆສຳລັບກວດສອບຮູບແບບອີເມວ
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // ເພີ່ມການປ່ຽນຜ່ານແບບລຽບງ່າຍສຳລັບລາຍການເມນູໃໝ່
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') { // Check if href is not just '#'
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
