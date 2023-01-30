// /* Запрос */
// const obj = {
//     topicId: number,
//     status: string" // "draft", "deleted"
// }
//     /* Ответ */
//     [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
//     ]
//
// /*
// async function getFaqs(req) {
// 	const res = await fetch('/faqs', {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
// 	const data = await res.json();
// 	return data;
// }
// /*

//----------рішення-------------------------------------------------------------------------

enum StatusCodeGetFaqs {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}


async function getFaqs(req: {
    topicId: number;
    status?: StatusCodeGetFaqs
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: StatusCodeGetFaqs
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: {
        question: string,
        answer: string,
        tags: string[],
        likes: number,
        status: StatusCodeGetFaqs
    }[] = await res.json();
    return data;
}



