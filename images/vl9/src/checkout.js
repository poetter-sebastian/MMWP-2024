// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation()
        }

        form.classList.add('was-validated');

        const data = new URLSearchParams();
        for (const pair of new FormData(form)) {
            data.append(pair[0], pair[1]);
        }

        fetch("src/form.php", {
            method: 'post',
            body: data,
        }).then(r =>
            console.log(r)
        );
    }, false)
})