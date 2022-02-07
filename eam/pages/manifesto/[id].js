import React from 'react';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { ManifestoContext } from '../../lib/context';

export default function ManifestoPage() {
    const router = useRouter();
    const [id, setId] = useState(null);
    const [manifestoList, setManifestoList] = useContext(ManifestoContext);
    const [manifesto, setManifesto] = useContext(ManifestoContext);
    const [branchingManifestos, setBranchingManifestos] = useState([]);

    useEffect(() => {
        if (router.isReady) {
            setId(router.query.id)
            setManifesto(manifestoList.find(manifesto => manifesto.id === parseInt(id)));
            const branchingManifestosRef = manifestoList.find(manifesto => manifesto.id === parseInt(id));
            branchingManifestosRef.length > 0 && setBranchingManifestos(branchingManifestosRef);
        };
    }, []);

    return (
        <div>
            <h1>{manifesto.id}</h1>
            <p>branched by</p>
            <ul className='space-x-1'>
                {branchingManifestos.map(m => <li><Link href={`manifesto/${m.id}`}><a>{m.id}</a></Link></li>)}
            </ul>
        </div>
    );
}