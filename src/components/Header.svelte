<!-- 
	File name : Header.svelte
	Description : Contain header (top bar) of all components.
	Author : Pankaj Kumar
	Version : 1
	Package : svelte_items
	Created : 15 March 2022
	Updated by : Pankaj Kumar
	Updated Date : 30 March 2022  -->

<main>
	<header id="MainHeader">
		<div id="HeaderDiv">
			<img
				src="https://www.ucertify.com/layout/themes/bootstrap4/images/logo/ucertify_logo.png"
				alt="logo"
			/>
		</div>
		<div id="HeaderDiv2">
			<p>uCertify Test Prep</p>
		</div>
	</header>
</main>

<style>
	img {
		padding-left: 50px;
	}

	#MainHeader {
		border: 2px solid black;
		position: fixed;
		background-color: white;
		width: 100%;
		top: 0;
		left: 0;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
		min-width: 312px;
	}
	#HeaderDiv {
		position: absolute;
		left: 0;
		margin-left: 13px;
		padding: 5px;
		height: 30px;
		width: 100px;
		background-color: rgb(221, 214, 214);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#HeaderDiv2 {
		font-size: 35px;
	}

	@media screen and (max-width: 554px) {
		#HeaderDiv {
			display: none;
		}
	}
	@media screen and (max-width: 347px) {
		#HeaderDiv2 {
			font-size: 28px;
		}
	}
</style>
