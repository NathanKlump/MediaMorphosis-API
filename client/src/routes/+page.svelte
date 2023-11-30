<!-- 
    Colors to keep in mind
    The dark blue: #08415C
    Light Grey: #8C92AC
    Yellow: #F9E900
 -->

<head>
	<title>MediaMorpher</title>
</head>

<body>
	<section class="navbarMain">
		<nav class="navigation">
			<a href="/" class="logo"><img src="favicon.PNG" alt="MediaMorpher Logo" class="logo-img" /></a
			>
			<div class="nav-links">
				<a href="/about" class="nav-link">About</a>
				<a href="/about" class="nav-link">Contact Sales</a>
			</div>
		</nav>
	</section>

	<section class="hero">
		<div class="container">
			<h1>Welcome to MediaMorphisis!</h1>
			<p>Convert media files into various formats with ease!</p>
			<button class="btn btn-primary">Convert your File</button>
		</div>
	</section>

	<section class="features">
		<div class="container">
			<h2>Why Choose Our Video Converter?</h2>
			<div class="feature">
				<h3>Supports Multiple Formats</h3>
				<p>
					Convert your videos to a wide range of popular formats, including MP4, AVI, MKV, WMV, MOV,
					and FLV.
				</p>
			</div>

			<div class="feature">
				<h3>Fast and User-Friendly</h3>
				<p>
					Our video converter is fast and easy to use. Simply upload your video and select the
					desired format.
				</p>
			</div>

			<div class="feature">
				<h3>Security and Privacy</h3>
				<p>
					Rest assured, your videos are kept secure and private. We never share your videos with
					anyone else.
				</p>
			</div>
		</div>
	</section>

	<footer>
		<div class="container">
			<p>&copy; 2023 Video Converter by: Dominick Kalaj, John Atalla, Nathaniel Klump</p>
		</div>
	</footer>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

	/* Global styles */
	body {
		font-family: 'Libre Baskerville', sans-serif;
		margin: 0;
		padding: 0;
		background-color: #8c92ac;
	}

	/* Navbar styles */
	.navbarMain {
		/* display: flex; */
		align-items: center;
		justify-content: space-between;
		background-color: #08415c;
		color: white;
		padding: 20px 0;
		margin: 20px;
		border-bottom-left-radius: 25px;
		border-bottom-right-radius: 25px;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		border-right: 25px;
	}

	.navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 2rem;
	}

	/* set color of nav links */
	.nav-links {
		display: flex;
		justify-content: flex-end;
		color: #f97068;
	}

	.nav-link {
		color: #f9e900;
		font-size: 1rem;
	}
	/* change color of nav links when hovered over */
	.nav-links:hover {
		color: #d6d3f0;
	}

	/* set properties for the logo */
	.logo {
		width: 210px;
		height: 150px;
		border-radius: 100px;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.logo svg {
		width: 100%;
		height: auto;
	}

	.nav-link {
		margin-left: 20px;
		text-decoration: none;
		font-weight: bold;
	}

	/* Hero section styles */
	.hero {
		background-color: #f8f9fa;
		padding: 50px 0;
		text-align: center;
	}

	.hero h1 {
		font-size: 50px;
		margin-bottom: 20px;
	}

	.hero p {
		font-size: 1.5rem;
		margin-bottom: 30px;
	}

	.btn {
		display: inline-block;
		padding: 70px 140px;
		background-color: #08415c;
		color: white;
		border: none;
		border-radius: 30px;
		cursor: pointer;
		font-size: 30px;
		font-family: 'Libre Baskerville', sans-serif;
	}

	/* Features section styles */
	.features {
		padding: 50px 0;
		text-align: center;
	}

	.feature h3 {
		font-size: 2rem;
		margin-bottom: 10px;
	}

	/* Footer styles */
	footer {
		background-color: #f8f9fa;
		padding: 20px 0;
		text-align: center;
	}
</style>
