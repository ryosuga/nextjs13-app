// app/dynamic/[postId]/page.tsx

import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/microcms";

// キャッシュを利用しない
export const revalidate = 0;

// 60秒間はキャッシュを利用する
//export const revalidate = 60;

export async function generateStaticParams() {
    const { contents } = await getList();

    const paths = contents.map((post) => {
        return {
            postId: post.id,
        };
    });

    return [...paths];
}

export default async function StaticDetailPage({
    params: { postId },
}: {
    params: { postId: string };
}) {
    const post = await getDetail(postId);

    // ページの生成された時間を取得
    const time = new Date().toLocaleString();

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{time}</h2>
            <div>{parse(post.content)}</div>
        </div>
    );
}