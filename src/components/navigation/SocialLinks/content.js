import { Github } from '@styled-icons/bootstrap/Github';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Twitter } from '@styled-icons/bootstrap/Twitter';
import theme from '../../../theme';

const color = theme.colors.black;

const socials = [
	{
		url: 'https://github.com/ReneSena',
		icon: <Github size="24" color={color} />,
	},
	{
		url: 'https://br.linkedin.com/in/rene-sena',
		icon: <Linkedin size="24" color="#0e76a8" />,
	},
	{
		url: 'https://twitter.com/sleeperU_U',
		icon: <Twitter size="24" color="#00acee" />,
	},
];

export default socials;
