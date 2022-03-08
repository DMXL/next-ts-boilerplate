import Head from 'next/head';
import * as React from 'react';
import Content from '/components/Content';
import type {NextPage} from 'next';

const Home: NextPage = () => (
	<div>
		<Head>
			<title>
				Next + React + Typescript + StyledComponent boilerplate
			</title>
			<meta
				content="Next + React + TypeScript + StyledComponent boilerplate"
				name="description"
			/>
		</Head>

		<Content/>
	</div>
);

export default Home;
