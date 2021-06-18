import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Infrastructure from '../src/pages/Infrastructure';

export default function InfrastructurePage() {
	const containerRef = useRef(null);
	return (
		<LocomotiveScrollProvider options={{ smooth: true }} containerRef={containerRef}>
				<Infrastructure containerRef={containerRef} />
		</LocomotiveScrollProvider>
	)
}