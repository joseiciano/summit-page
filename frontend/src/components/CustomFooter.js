import React from 'react';

import '../css/style.css';
import {
	BottomNavigation,
	BottomNavigationAction,
	Typography,
} from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function CustomFooter() {
	const iconStyle = { color: 'white' };
	return (
		<div
			className="Bottom-Nav"
			style={{
				backgroundColor: 'rgb(33,26,30)',
				paddingTop: '20px',
				paddingBottom: '10px',
			}}
		>
			<Typography variant="h4" style={{ textAlign: 'center', color: 'white' }}>
				Contact Us
			</Typography>
			<BottomNavigation style={{ backgroundColor: 'rgb(33,26,30)' }}>
				<BottomNavigationAction
					style={iconStyle}
					label="Youtube"
					value="Youtube"
					href="https://www.youtube.com/user/ubreakifixco"
					icon={<YouTubeIcon />}
				/>
				<BottomNavigationAction
					style={iconStyle}
					label="Facebook"
					value="Facebook"
					href="https://www.facebook.com/ubreakifix"
					icon={<FacebookIcon />}
				/>
				<BottomNavigationAction
					style={iconStyle}
					label="Twitter"
					value="Twitter"
					href="https://twitter.com/ubreakifix"
					icon={<TwitterIcon />}
				/>
			</BottomNavigation>
			<p style={{ textAlign: 'center', color: 'white' }}>
				Phone Number: (877) 320-2237
			</p>
			{/* <br /> */}
			<p style={{ textAlign: 'center', color: 'white' }}>
				Email Address: support@ubreakifix.com
			</p>
			<p style={{ textAlign: 'center', color: 'white' }}>
				&copy; 2020-2021 by ubreakifix. All Rights Reserved.
			</p>
			{/* <Typography variant="p" style={{ textAlign: 'center', color: 'white' }}>
				Phone Number: (877) 320-2237
			</Typography>
			<br />
			<Typography variant="p" style={{ textAlign: 'center', color: 'white' }}>
				Email Address: support@ubreakifix.com
			</Typography> */}
		</div>
	);
}
