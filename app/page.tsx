import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-12 p-24">
            <h1>Computer Science Tutor</h1>

            <div className='max-w-lg w-full gap-8 flex flex-col'>
                <h2 className='text-center'>Paper 1</h2>
                <div className='flex flex-wrap justify-around w-full'>
                    <div className='flex flex-col'>
                        <h3>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_11.pdf'>Nov 2022 - 11</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_12.pdf'>Nov 2022 - 12</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_13.pdf'>Nov 2022 - 13</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_11.pdf'>Jun 2022 - 11</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_12.pdf'>Jun 2022 - 12</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_13.pdf'>Jun 2022 - 13</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_11.pdf'>Nov 2021 - 11</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_12.pdf'>Nov 2021 - 12</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_13.pdf'>Nov 2021 - 13</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_11.pdf'>Nov 2022 - 11</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_12.pdf'>Nov 2022 - 12</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_13.pdf'>Nov 2022 - 13</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_11.pdf'>Jun 2022 - 11</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_12.pdf'>Jun 2022 - 12</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_13.pdf'>Jun 2022 - 13</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_11.pdf'>Nov 2021 - 11</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_12.pdf'>Nov 2021 - 12</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_13.pdf'>Nov 2021 - 13</Link>
                    </div>
                </div>
                <h2 className='text-center'>Paper 2</h2>
                <div className='flex flex-wrap justify-around w-full'>
                    <div className='flex flex-col'>
                        <h3>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_21.pdf'>Nov 2022 - 21</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_22.pdf'>Nov 2022 - 22</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_23.pdf'>Nov 2022 - 23</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_21.pdf'>Jun 2022 - 21</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_22.pdf'>Jun 2022 - 22</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_23.pdf'>Jun 2022 - 23</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_21.pdf'>Nov 2021 - 21</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_22.pdf'>Nov 2021 - 22</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_23.pdf'>Nov 2021 - 23</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_21.pdf'>Nov 2022 - 21</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_22.pdf'>Nov 2022 - 22</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_23.pdf'>Nov 2022 - 23</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_21.pdf'>Jun 2022 - 21</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_22.pdf'>Jun 2022 - 22</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_23.pdf'>Jun 2022 - 23</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_21.pdf'>Nov 2021 - 21</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_22.pdf'>Nov 2021 - 22</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_23.pdf'>Nov 2021 - 23</Link>
                    </div>
                </div>
                <h2 className='text-center'>Paper 3</h2>
                <div className='flex flex-wrap justify-around w-full'>
                    <div className='flex flex-col'>
                        <h3>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_31.pdf'>Nov 2022 - 31</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_32.pdf'>Nov 2022 - 32</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_33.pdf'>Nov 2022 - 33</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_31.pdf'>Jun 2022 - 31</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_32.pdf'>Jun 2022 - 32</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_33.pdf'>Jun 2022 - 33</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_31.pdf'>Nov 2021 - 31</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_32.pdf'>Nov 2021 - 32</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_33.pdf'>Nov 2021 - 33</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_31.pdf'>Nov 2022 - 31</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_32.pdf'>Nov 2022 - 32</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_33.pdf'>Nov 2022 - 33</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_31.pdf'>Jun 2022 - 31</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_32.pdf'>Jun 2022 - 32</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_33.pdf'>Jun 2022 - 33</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_31.pdf'>Nov 2021 - 31</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_32.pdf'>Nov 2021 - 32</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_33.pdf'>Nov 2021 - 33</Link>
                    </div>
                </div>
                <h2 className='text-center'>Paper 4</h2>
                <div className='flex flex-wrap justify-around w-full'>
                    <div className='flex flex-col'>
                        <h3>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_41.pdf'>Nov 2022 - 41</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_42.pdf'>Nov 2022 - 42</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_43.pdf'>Nov 2022 - 43</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_41.pdf'>Jun 2022 - 41</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_42.pdf'>Jun 2022 - 42</Link>
                        <Link href='/downloads/Jun2022/9618_w22_qp_43.pdf'>Jun 2022 - 43</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_41.pdf'>Nov 2021 - 41</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_42.pdf'>Nov 2021 - 42</Link>
                        <Link href='/downloads/Nov2021/9618_w22_qp_43.pdf'>Nov 2021 - 43</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_41.pdf'>Nov 2022 - 41</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_42.pdf'>Nov 2022 - 42</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_43.pdf'>Nov 2022 - 43</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_41.pdf'>Jun 2022 - 41</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_42.pdf'>Jun 2022 - 42</Link>
                        <Link href='/downloads/Jun2022/9618_w22_ms_43.pdf'>Jun 2022 - 43</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_41.pdf'>Nov 2021 - 41</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_42.pdf'>Nov 2021 - 42</Link>
                        <Link href='/downloads/Nov2021/9618_w22_ms_43.pdf'>Nov 2021 - 43</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
