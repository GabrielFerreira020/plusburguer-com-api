import './index.scss';
import { Link } from 'react-router-dom';

export default function Index(){


    return(
        <main className='menu'>
            <header className="header">
                <div className="header-es">
                    <img className="logo"  src="/logo-hamburguer.png"alt=""/>
                    <h1 className="header-ti"> PLUS BURGUER </h1>
                </div>  
                <div className="header-di">
                    <Link style={{"color": "#fff", "text-decoration": "none", "margin-right":"30px"}} to="/login">ENTRAR</Link>
                    <Link  style={{"color": "#fff", "text-decoration": "none"}} to="/login"><p>ENTRE EM CONTATO</p></Link> 
                </div>
            </header>
             <div className="f1">
                <h1 className="f1-h1">sabor <br/>e<br/> qualidade</h1>
            </div>

            <div style={{"height": "25px", "background-color":"#F69D17"}} ></div>
            <div className="f2">
                <img className="logo1" src="/logo-hamburguer.png" alt=""/>
                <div className="f2-text">
                    <h1 className="f2-titulo">Como nossa hamburgueria nasceu ?</h1>
                    <p className="f2-conteudo">Nossa empresa surgiu como um sonho de infância. Que começou como uma pequena lanchonete e ficamos 5 anos em um bom ritmo, mas então veio a pandemia, que se tornou um trauma e ao  mesmo tempo um renascimento. Foram muitos meses de problemas, mas quem diria que esses problemas se tornariam nossa luz de esperança. Então decidimos que as pessoas precisavam de ajuda nesse grande momento de dificuldade, e para ficarmos mais próximo dos nossos clientes decidimos criar nossa própria página web com o intuito de servir melhor nossos clientes.</p>
                </div>
            </div>

            <div style={{"height": "25px", "background-color":"#F69D17"}}  ></div>

            <div className="f3">
                <div className="f3-cima">
                    <div className="f3-conteudo">
                        <h1 className="f3-titulo">Atendimentos e Serviços</h1>
                        <p className="f3-text">Proporcionamos uma variedade de serviços durante sua refeição. 
                            Venha garantir seu lazer com sua família e amigos.
                            Trazemos um ambiente de confiança e variedade de Pratos e garantimos pra você nosso melhor atendimento.
                            Atender você é um verdadeiro prazer.
                            </p>
                    </div>
                    <img className="f3-image-hamburguer" src="/images/comendo hamburguer.jpg" alt=""/>
                </div>
                <div className="f3-baixo">
                    <img className="f3-image-escorregador" src="/images/1-menina-descendo-escorregador.jpg" alt=""/>
                    <div className="f3-conteudo2">
                        <h1 className="f3-titulo2">Atividades paras crianças</h1>
                        <p className="f3-text2">Temos uma area recreativa para as crianças se divertirem e aproveitar a experiencia do local o maximo.
                            Essa area conta com alguns brinquedos como escorregador, cama elastica, gira-gira,piscina de bolinhas etc...
                            Temos tambem uma area de jogos com videos games e computadores atualizados.</p>
                    </div>
                </div>
            </div>

            <div className="f4">
                <img className="logo1" src="/logo-hamburguer.png" alt=""/>
                <div className="f4-cima">
                    <div className="f4-conteudo">
                        <h1 className="f4-titulo">Como preparamos nossos lanches</h1>
                        <p className="f4-text">
                            Nossos lanches são feitos de forma totalmente artesanal, temos nossas proprias fazendas aonde é produzida nossas carnes, vergetais, farinha de trigo para os pães, etc...
                            Temos tambem uma fabrica aonde é produzido os pães 
                            e batatas fritas artersanais tudo da melhor qualidade para
                            os nossos clientes se sentirem satisfeitos.
                        </p>
                    </div>
                    <img className="f4-image-tomate" src="/images/revolucao-dos-tomateiros.jpg" alt=""/>
                </div>
                <div className="f4-baixo">
                    <h1 className="f4-titulo-baixo">Temos opções para veganos tambem !! </h1>
                    <div className="f4-images">
                    <img className="f4-image-hb"  src="/images/hamburguer-vegetariano-de-grao-de-bico-2.jpeg" alt=""/>
                    <img className="f4-image-hb-2" src="/images/Carne-para-fazer-hamburguer-experimente-a-costela.jpg" alt=""/>
                    </div>
                </div>
            </div>

            <div style={{"height": "25px", "background-color":"#F69D17"}} ></div>

            <div className="f5">
                <div className="f5-cima">
                    <h1 className="f5-titulo">Principal hamburguer da casa</h1>
                    <p className="f5-text">É um gigantesco hamburguer especial de queijo cheddar que faz qualquer um se derreter!!</p>
                </div>
                <div className="f5-baixo">
                    <img className="f5-image" src="/images/cheesebomb-burger.webp"alt=""/>
                    <h1 className="f5-titulo-baixo">Esse é pra quem realmente ama cheddar e não larga essa delicia!!</h1>
                </div>
            </div>

            <div className="f6">
                <div className="f6-box">
                <img className="image , d1" src="/images/image 24.png" alt=""/>
                <h3>hamburguer de cheddar</h3>
                <p className="gr"> Inconfundível Smash Burguer de 80gr, 100% bovino, coberto com queijo Cheddar e molho à sua escolha, num delicioso Pão Brioche amanteigado.</p>
                </div>
        
                <div className="f6-box">
                    <img className="image , d1" src="/images/image 25.png" alt=""/>
                    <h3>hamburguer de frango</h3>
                    <p className="gr">Para os bons de briga!!! Frango Super Crocante, coberto com queijo cheddar, cebola crispy com tempero especial da casa, molho à escolha, no delicioso Pão Brioche.</p>
                </div>
        
                <div className="f6-box">
                    <img className="image , d1" src="/images/image 26.png" alt=""/>
                    <h3>hamburguer de calabresa</h3>
                    <p className="gr">o sanduíche leva linguiça calabresa defumada naturalmente com o tempero da pimenta calabresa, 100g de carne Angus, queijo prato, cream cheese, cebola branca, mostarda com mel, rúcula, tomate fatiado, montado em um pão de brioche.</p>
                </div>
            </div>


            <div className="rodape">
                <img  className="logo1" src="/logo-hamburguer.png" alt=""/>
                <div className="rodape-text">
                    <div>
                        <h6>LINKS ÚTEIS</h6>
                        <br/>
                        <div className="inf">sobre</div>
                        <br/>
                        <div className="inf">suporte</div>
                        <br/>
                        <div className="inf">contatos</div>
                        <br/>
                        <div className="inf">privacidade</div>
                    </div>

                    <div className="d2">
                        <h6>HORÁRIOS</h6>
                        <br/>
                        <div className="inf">ABERTO de TER a DOM</div>
                        <br/>
                        <div className="inf">18:00 - 23:00</div>
                    </div>
                </div>
                <div className="icons">
                    <img className= "icon1" src="/images/image 10.png" alt=""/>
                    <img className= "icon1" src="/images/image 12.png" alt=""/>
                    <img className= "icon1" src="/images/image 17.png" alt=""/>
                </div>
        
            </div>  
        </main>
    )
}