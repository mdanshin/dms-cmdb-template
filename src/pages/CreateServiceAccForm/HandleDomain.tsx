import { useState } from 'react';

export default function useHandleDomain(event?: any): any {    
    const [domain, setDomain] = useState('IBS')
    
    const handle = (event: any) => {
        setDomain(event.target.value)
    }

    return {
        domain, 
        handle
    }
}
