import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="main-contents">
          <a href="https://main-site-nissy.netlify.app" target="_blank" rel="noopener noreferrer">
            <h1>制作物1 : Toolbox</h1>
          </a>
          <p>便利機能を集めたアプリを制作しました。</p>
          <a href="https://github.com/nissy0903/portfolio-site.git">github</a>
          <a href="https://dynamic-pie-0fcaad.netlify.app/" target="_blank" rel="noopener noreferrer">
            <h1>制作物2 : 林檎ゲーム</h1>
          </a>
          <p> 林檎を時間内に収穫する数を競うゲームを作成しました。制限時間を設けてゲームに緊迫感が出るように工夫しました。また、プレイヤーを楽しませるため、点数に応じてスコア画面のメッセージが変化する、林檎の色がランダムに変化する、といったギミックを加えました。</p>
          <a href="https://github.com/nissy0903/apple-game.git">github</a>
        </div>
      </main>
      <footer className={styles.footer}>
        <small>nissy</small>
      </footer>
    </div>
  );
}
