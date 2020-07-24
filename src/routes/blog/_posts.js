// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'How to use only one certificate with certbot and nginx',
		slug: 'how-to-use-only-one-certificate-with-certbot-and-nginx',
    description: '',
    tags: ['nginx', 'certbot', 'aws', 'continuous integration'],
    date: "2020-07-23"
	},
	{
		title: 'How to push a static website to AWS using github actions',
		slug: 'how-to-push-a-static-website-to-aws-using-github-actions',
    description: '',
    tags: ['github actions', 'aws', 'continuous integration'],
    date: "2020-07-20"
	},
	{
		title: 'How to add Svelte on Elixir Phoenix Framework',
		slug: 'how-to-add-svelte-on-elixir-phoenix-framework',
    description: '',
    tags: ['elixir', 'svelte'],
    date: "2020-07-17"
	}
];

export default posts;
