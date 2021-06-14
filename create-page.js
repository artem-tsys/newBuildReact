const fs = require('fs');
const path = require('path');

function getPugTemplate(scriptName) {
	return `
import Head from 'next/head';
import styles from '../styles/${scriptName.toUpperCase()}.module.scss';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
      
      </main>
      <Footer />
    </div>
  );
}
`
}
const tmplateName = process.argv[2];

if (!!tmplateName === false) {
	console.warn('You didn`t enter component name');
	process.exit();
}

const pathesToComponentParts = {
	style: 'src/styles/',
	jsx: 'src/pages/',
};
const formats = {
	style: 'module.scss',
	jsx: 'jsx'
};

const typesFile = Object.keys(pathesToComponentParts);

typesFile.forEach((type) => {
	const pathToFolder = pathesToComponentParts[type];
	console.log(pathesToComponentParts);
	fs.readdir(path.resolve(process.cwd(), pathToFolder), function(err, files) {
		let isFileExistInFolder = false;
		const componentName = `${tmplateName}.${formats[type]}`;
		
		const filesNameWithoutExt = files.map(el => el.replace(/\.(scss|jsx)/, ''));
		const pathToFile = `${pathToFolder}/${componentName}`;
		
		if (filesNameWithoutExt.includes(tmplateName)) isFileExistInFolder = true;
		
		if (!isFileExistInFolder) {
			const contentTemplate = (type === 'jsx') ? getPugTemplate(tmplateName) : '';
			
			fs.writeFile(pathToFile, contentTemplate, function(err) {
				console.log(`\x1b[32m`, `${componentName} создан`);
			});
			return;
		}
		console.log(`\x1b[33m%s\x1b[0m`, `${componentName} уже есть`);
	});
});
