import * as React from 'react';
interface TeamStatProps {
    updated: string;
}
export default class TeamStat extends React.Component<TeamStatProps> {
    state: {
        loading: boolean;
        updated: string;
        members: string;
    };
    componentDidMount(): void;
    componentWillReceiveProps(props: any): void;
    loader(): JSX.Element;
    content(): JSX.Element;
    render(): JSX.Element;
}
export {};
