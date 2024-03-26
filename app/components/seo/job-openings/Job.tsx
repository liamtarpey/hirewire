import { Badge } from '../../uikit';
import { StyledJob } from './Job.styled';
import Image from 'next/image';

export default function Job({
    name,
    location,
    company,
    url,
}: {
    name: string;
    location: string;
    company: string;
    url: string;
}) {
    return (
        <StyledJob href={url}>
            <Image
                src="/logos/hirewire-logo-square.png"
                alt="Hirewire logo"
                width={40}
                height={40}
            />
            <h4>{name}</h4>
            {/* <p>{company}</p> */}
            <p className="job-location">{location}</p>
            <Badge>New</Badge>
        </StyledJob>
    );
}
