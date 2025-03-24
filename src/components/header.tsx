import Link from 'next/link';

export default function Header() {
    return (
        <header>
        <h1>{`Nissy's Portfolio`}</h1>
        <nav className='header-nav'>
            <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="">Projects</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
}