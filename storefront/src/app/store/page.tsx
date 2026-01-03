import { sdk } from "@/lib/medusa"
import styles from "./page.module.scss"
import Image from "next/image"

// Define types for better safety
type Product = {
    id: string
    title: string
    description?: string | null
    thumbnail?: string | null
    variants?: any[]
    [key: string]: any
}

export default async function Home() {
    let products: Product[] = []
    let error = null

    try {
        const response = await sdk.store.product.list({
            fields: "+images,+variants"
        })
        products = response.products as Product[]

        // Debug: Log image URLs to server console
        // console.log("--- DEBUG: Product Images ---")
        // products.forEach(p => {
        //     console.log(`Product: ${p.title}`)
        //     console.log(`Thumbnail: ${p.thumbnail}`)
        // })
        // console.log("----------------------------")

    } catch (err: any) {
        console.error("Failed to fetch products:", err)
        error = err
    }

    // Check if key is placeholder
    const isPlaceholder = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY?.includes("placeholder")
    const isMissingKey = !process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
    const showSetupGuide = isPlaceholder || isMissingKey || error

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>My Medusa Store</h1>

            {showSetupGuide ? (
                <div style={{ padding: '2rem', background: '#fff0f0', borderRadius: '8px', color: '#d32f2f' }}>
                    <h2 style={{ marginTop: 0 }}>⚠️ 設定が必要です</h2>
                    <p>商品データを取得できませんでした。以下の原因が考えられます：</p>
                    <ul>
                        <li><b>APIキーが未設定:</b> <code>.env.local</code> の <code>NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY</code> がプレースホルダーのままです。</li>
                        <li><b>バックエンド未起動:</b> Medusa バックエンド (port 9000) が起動していないか、CORSエラーが発生しています。</li>
                    </ul>
                    <p>詳細は <code>docs/setup_storefront/walkthrough.md</code> を確認してください。</p>
                    <hr style={{ borderColor: '#ffcdd2', margin: '1rem 0' }} />
                    <details>
                        <summary>エラー詳細</summary>
                        <pre style={{ background: '#000', color: '#fff', padding: '1rem', borderRadius: '4px', overflowX: 'auto' }}>
                            {JSON.stringify(error, null, 2)}
                        </pre>
                    </details>
                </div>
            ) : products.length === 0 ? (
                <p>商品が見つかりませんでした。</p>
            ) : (
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            {product.thumbnail && (
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
                                    <Image
                                        src={product.thumbnail}
                                        alt={product.title}
                                        fill
                                        style={{ objectFit: "cover", borderRadius: "4px" }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            )}
                            <h2>{product.title}</h2>
                            <p>{product.description?.slice(0, 80)}...</p>

                            {/* Simple price display from first variant */}
                            <div className={styles.price}>
                                {(() => {
                                    const price = product.variants?.[0]?.calculated_price
                                    return price?.calculated_amount && price?.currency_code
                                        ? `${price.calculated_amount} ${price.currency_code.toUpperCase()}`
                                        : "Price Check Required"
                                })()}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}
