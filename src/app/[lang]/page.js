import AvataImage from "./components/AvataImage"
import Link from "next/link"
import '@/assets/SCSS/stylePortfolioPage.scss'
import { getDictionary } from "@/dictionaries/dictionaries"

export default async function Portfolio({ params: { lang } }) {
    const dict = await getDictionary(lang);

    const listSocialContact = [
        {
            name: dict.contact.listSocialContact[0].span,
            info: "0328895451",
            href: "/",
        },
        {
            name: "Zalo: ",
            info: "https://zalo.me",
            href: "https://zalo.me",
        },
        {
            name: "Email: ",
            info: "contact@fullstack.edu.vn",
            href: "mailto:contact@fullstack.edu.vn",
        },
        {
            name: "Facebook: ",
            info: "https://www.facebook.com/groups/f8official",
            href: "https://www.facebook.com/groups/f8official",
        },
        {
            name: "Youtube: ",
            info: "https://www.youtube.com/c/f8vnofficial",
            href: "https://www.youtube.com/c/f8vnofficial",
        },
    ]

    return (
        <div className='portfolio-page'>
            <div className="container">
                <h1>The Example Name</h1>

                <div className="separate-column">
                    <aside className="overral">
                        <figure>
                            <AvataImage />
                            <figcaption className='desc'>Frond-end developer</figcaption>
                        </figure>

                        <div className="skills">
                            <h3>{ dict.skills.heading }</h3>
                            <p><span>{ dict.skills.content[0].nameSkill }</span>{ dict.skills.content[0].listSkill }</p> 
                            <p><span>{ dict.skills.content[1].nameSkill }</span>{ dict.skills.content[1].listSkill }</p>

                            <h3>{ dict.histories.heading }</h3>
                            <p><span>2015</span>{ dict.histories.journey[0].experience }</p>
                            <p><span>2016-2018</span>{ dict.histories.journey[1].experience }</p>
                            <p><span>2018-2020</span>{ dict.histories.journey[2].experience }</p>
                            <p><span>2021-2023</span>{ dict.histories.journey[3].experience }</p>
                        </div>
                    </aside>

                    <div className='info'>
                        <div className='contact'>
                            <h3 className='contact-heading'>{ dict.contact.heading }</h3>
                            {
                                listSocialContact.map(({ name, info, href }, index) => {
                                    if (index === 0) {
                                        return (
                                            <p className='contact-social' key={index}>
                                                <span>{ name }</span>
                                                <Link href={href}>{info}</Link>
                                            </p>
                                        )
                                    }
                                    return (
                                        <p className='contact-social' key={index}>
                                            <span>{ name }</span>
                                            <a href={href} target="_blank">{info}</a>
                                        </p>
                                    )
                                })
                            }
                        </div>

                        <div className='projects'>
                            <h3>{ dict["self-projects"].heading }</h3>

                            <div className='project'>
                                <h4>{ dict["self-projects"].projects[0]["heading-project"] }</h4>
                                <p>{ dict["self-projects"].projects[0].desc }</p>
                                <p>{ dict["self-projects"].projects[0]["detail-desc"] }</p>
                                <div className='action-buttons'>
                                    <a href="https://phivanduc.github.io/Offline-F8-K3/Project-FrontEnd/" target="_blank">Demo</a>
                                    <a href="https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Project-FrontEnd" target="_blank">Code</a>
                                </div>
                            </div>

                            <div className='project'>
                                <h4>{ dict["self-projects"].projects[1]["heading-project"] }</h4>
                                <p>{ dict["self-projects"].projects[1].desc }</p>
                                <p>{ dict["self-projects"].projects[1]["detail-desc"] }</p>
                                <div className='action-buttons'>
                                    <a href="https://phivanduc.github.io/Offline-F8-K3/Day-47-React/dist/" target="_blank">Demo</a>
                                    <a href="https://github.com/PhiVanDuc/Offline-F8-K3/tree/main/Day-47-React" target="_blank">Code</a>
                                </div>
                            </div>

                            <a href="https://github.com/PhiVanDuc/Offline-F8-K3" target="_blank">https://github.com/PhiVanDuc/Offline-F8-K3</a>
                        </div>

                        <div className='hobbies'>
                            <h3>{ dict.hobbies.heading }</h3>

                            <ul className='list-hobbies'>
                                <li className='hobby'>{ dict.hobbies["list-hobbies"][0] }</li>
                                <li className='hobby'>{ dict.hobbies["list-hobbies"][1] }</li>
                                <li className='hobby'>{ dict.hobbies["list-hobbies"][2] }</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}