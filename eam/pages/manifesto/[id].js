import React from 'react';
import { useRouter, Link } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { ManifestoContext } from '../../lib/context';

export default function ManifestoPage() {
    const router = useRouter();
    const { id } = router.query;

    const manifestos = useContext(ManifestoContext);
    const [manifesto, setManifesto] = useState(null);
    const [branchingManifestos, setBranchingManifestos] = useState(null);

    useEffect(() => {
        const manifestoRef = manifestos.find(manifesto => manifesto.id === parseInt(id));
        setManifesto(manifestoRef);
        const branchingManifestosRef = manifestos.filter(manifesto => manifesto.from === parseInt(id));
        setBranchingManifestos(branchingManifestosRef);
    }, [id, manifestos]);
    
    
    return (
        <div>
            <h1>{id}</h1>
            {branchingManifestos 
                ? branchingManifestos.length > 0 && 
                    <>
                    <p>branched by</p>
                    <ul className='space-x-1'>
                        {branchingManifestos.map(m => <li><Link href={`manifesto/${m.id}`}><a>{m.id}</a></Link></li>)}
                    </ul>
                    </>
                : null
            }
            <span>{id}</span>
            <p>{manifesto ? manifesto.content : ''}</p>
        </div>
    );
}