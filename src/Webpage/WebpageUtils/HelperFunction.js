export const goToContactus = (id) => {
    const violation = document.getElementById(id)
    window.scrollTo({
        top: violation.offsetTop,
        behavior: 'smooth',
    })
}
