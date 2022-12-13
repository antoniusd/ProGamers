document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)

})

const createSnow = () => {
	const snowflake = document.createElement('i')
	snowflake.classList.add('snowflake')
	snowflake.textContent = ''

	snowflake.style.left = Math.random() * window.innerWidth + 'px'
	snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'
	snowflake.style.opacity = Math.random()

	document.body.append(snowflake)

	setTimeout(() => {
		snowflake.remove()
	}, 8000)
}

setInterval(createSnow, 50)
