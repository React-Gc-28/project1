import styled from "styled-components";
import {FaFacebookF, FaTwitter, FaTripadvisor} from "react-icons/fa";
import colors from "./colors";

const Wrapper = styled.article`
	display:flex;
	flex-direction:column;
	align-items:center;
	padding:4rem 1rem;

	p{
		font-family: 'Allura', cursive;
		color:${colors.c2};
		font-size:3.5rem;
	}

	ul{
		display: flex;
		gap: 1rem;
		list-style: none;

		li{
			display: inline-grid;
			place-items:center;
			font-size:1.1rem;
			color:${colors.white};
			background-color:${colors.c1};
			transition:.5s;
			padding:0.5rem;
			border-radius:50%;

			&:hover{
				background-color:${colors.c2};
			}
		}
	}

	@media screen and (max-width: 768px){
		padding:2rem 1rem;
	}
`


const Follow = ()=>{
	return(
		<Wrapper>
			<p>Follow US</p>
			<ul>
				<li>
					<FaFacebookF/>
				</li>
				<li>
					<FaTwitter/>
				</li>
				<li>
					<FaTripadvisor/>
				</li>
			</ul>
		</Wrapper>
	);
}

export default Follow;