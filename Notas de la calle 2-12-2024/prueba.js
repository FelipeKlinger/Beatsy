gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG')

gsap.set('svg', {
	visibility: 'visible'
})
let tl = gsap.timeline();
tl.from('#ringGroup circle', {
	duration: 3,
	rotation: -360,
	transformOrigin: '50% 50%',
	stagger: {
		each: 0.095,
		repeat: -1
	},
	ease: 'linear'
})
.to('.grad', {
	duration: 4,
	attr: {
		x1:'-=300',
		x2:'-=300'
	},
	repeat: -1,
	yoyo: true,
	ease: 'sine.inOut'
}, 0)
gsap.globalTimeline.timeScale(2)