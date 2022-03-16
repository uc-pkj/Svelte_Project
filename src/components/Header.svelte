<main>
	<header id="mainheader">
		<div id="headerdiv">
			<img src="./uclogo.png" alt="logo">
		</div>
		<div id="headerdiv2">
			<p>uCertify Test Prep</p>
		</div>
	</header>
</main>

<style>
	img{
		padding-left: 50px;
	}
	
	#mainheader{
		border: 2px solid black;
		position:fixed;
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
	#headerdiv{
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
	#headerdiv2{
		font-size: 35px;
	}

	@media screen and (max-width:554px) {
		#headerdiv{
			display: none;
		}
	}
	@media screen and (max-width:347px) {
		#headerdiv2{
			font-size: 28px;
		}
	}
</style>