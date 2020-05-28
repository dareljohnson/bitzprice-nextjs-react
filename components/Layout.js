import Head from 'next/head';
import NavBar from '../components/NavBar';

const layoutStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	width: '100%'
};

const contentStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	marginTop: '4%',
	marginLeft: '21%',
	marginRight: '21%'
};

const Layout = (props) => (
	<div>
		<Head>
			<title>BitzPrice</title>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/materia/bootstrap.min.css"
			/>
		</Head>
		<div className="Layout" style={layoutStyle}>
			<NavBar />
			<div className="Content" style={contentStyle}>
				{props.children}
			</div>
		</div>
	</div>
);

export default Layout;
