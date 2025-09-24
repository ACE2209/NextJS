import styles from './page.module.css';
import { Button } from '@/components/ui/button'; // Từ Shadcn UI

export default function Css() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Chào mừng đến với Next.js và Shadcn UI!</h1>
      <p className={styles.description}>Week 3</p>
      <Button className="mt-4">Bấm vào đây</Button> {/* Ví dụ nút từ Shadcn UI */}
    </div>
  );
}