// prettier-ignore
const job = {
  title: 'Front-end Designer and Developer',
  description: 'I work in the Digital Products team at the Barbican. I spend my time building and designing better website-based experiences.',
}

// prettier-ignore
const title = (value, append = true) => (append ? 'Paul Heading | ' + value + ' | ' + job.title : value)

// prettier-ignore
function keywords(value) {
  var basic = 'front-end developer, front-end designer, react, next.js, vue.js, gsap, team treehouse, barbican, london'

  if (value) basic = value + ', ' + basic

  return basic
}

export default {
  job,
  title,
  keywords,
};
