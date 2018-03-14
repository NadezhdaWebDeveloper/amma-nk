<template>
	<div class="collection">
		<div class="container">
			<h1>The Collection</h1>
			<div class="tabs-wrap">
				<PageTabsNav/>
				<h2>Artist</h2>


				{{artists}}


				<!--artist-index-->
				<div class="artists-index">
						<div class="holder">
								<ul>
										<li><a href="#">a</a></li>
										<li><a href="#">b</a></li>
										<li><a href="#">c</a></li>
										<li><a href="#">d</a></li>
										<li><a href="#">e</a></li>
										<li><a href="#">f</a></li>
										<li><a href="#">g</a></li>
										<li><a href="#">h</a></li>
										<li><a href="#">i</a></li>
										<li><a href="#">j</a></li>
										<li><a href="#">k</a></li>
										<li><a href="#">l</a></li>
										<li><a href="#">m</a></li>
										<li><a href="#">n</a></li>
										<li><a href="#">o</a></li>
										<li><a href="#">p</a></li>
										<li><a href="#">q</a></li>
										<li><a href="#">r</a></li>
										<li><a href="#">s</a></li>
										<li><a href="#">t</a></li>
										<li><a href="#">u</a></li>
										<li><a href="#">v</a></li>
										<li><a href="#">w</a></li>
										<li><a href="#">x</a></li>
										<li><a href="#">y</a></li>
										<li><a href="#">Z</a></li>
								</ul>
						</div>
				</div>
				<!--/artist-index-->

				<!--artist-list-->
				<div class="artists-alphabet">
						<div class="item">
								<div class="heading">a</div>
								<div class="inner">
										<ul>
												<li><a href="#">Aertsen, <span>Pieter</span></a></li>
												<li><a href="#">Altdorfer, <span>Albrecht</span></a></li>
												<li><a href="#">Altichiero</a></li>
												<li><a href="#">Angelico, <span>Fra</span></a></li>
												<li><a href="#">Ast, <span>Balthasar van der</span></a></li>
												<li><a href="#">Astruc, <span>Zacharie</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">b</div>
								<div class="inner">
										<ul>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">c</div>
								<div class="inner">
										<ul>
												<li><a href="#">Cabanel, <span>Alexandre</span></a></li>
												<li><a href="#">Caillebotte, <span>Gustave</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
												<li><a href="#">Cabanel, <span>Alexandre</span></a></li>
												<li><a href="#">Caillebotte, <span>Gustave</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">d</div>
								<div class="inner">
										<ul>
												<li><a href="#">Aertsen, <span>Pieter</span></a></li>
												<li><a href="#">Altdorfer, <span>Albrecht</span></a></li>
												<li><a href="#">Altichiero</a></li>
												<li><a href="#">Angelico, <span>Fra</span></a></li>
												<li><a href="#">Ast, <span>Balthasar van der</span></a></li>
												<li><a href="#">Astruc, <span>Zacharie</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">e</div>
								<div class="inner">
										<ul>
												<li><a href="#">Aertsen, <span>Pieter</span></a></li>
												<li><a href="#">Altdorfer, <span>Albrecht</span></a></li>
												<li><a href="#">Altichiero</a></li>
												<li><a href="#">Angelico, <span>Fra</span></a></li>
												<li><a href="#">Ast, <span>Balthasar van der</span></a></li>
												<li><a href="#">Astruc, <span>Zacharie</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">f</div>
								<div class="inner">
										<ul>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">g</div>
								<div class="inner">
										<ul>
												<li><a href="#">Cabanel, <span>Alexandre</span></a></li>
												<li><a href="#">Caillebotte, <span>Gustave</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
												<li><a href="#">Cabanel, <span>Alexandre</span></a></li>
												<li><a href="#">Caillebotte, <span>Gustave</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">h</div>
								<div class="inner">
										<ul>
												<li><a href="#">Aertsen, <span>Pieter</span></a></li>
												<li><a href="#">Altdorfer, <span>Albrecht</span></a></li>
												<li><a href="#">Altichiero</a></li>
												<li><a href="#">Angelico, <span>Fra</span></a></li>
												<li><a href="#">Ast, <span>Balthasar van der</span></a></li>
												<li><a href="#">Astruc, <span>Zacharie</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">k</div>
								<div class="inner">
										<ul>
												<li><a href="#">Aertsen, <span>Pieter</span></a></li>
												<li><a href="#">Altdorfer, <span>Albrecht</span></a></li>
												<li><a href="#">Altichiero</a></li>
												<li><a href="#">Angelico, <span>Fra</span></a></li>
												<li><a href="#">Ast, <span>Balthasar van der</span></a></li>
												<li><a href="#">Astruc, <span>Zacharie</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">l</div>
								<div class="inner">
										<ul>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baburen, <span>Dirck van</span></a></li>
												<li><a href="#">Bacon, <span>Francis</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
												<li><a href="#">Bellini, <span>Giovanni</span></a></li>
												<li><a href="#">Baldung Grien, <span>Hans</span></a></li>
												<li><a href="#">Barocci, <span>Federico</span></a></li>
												<li><a href="#">Federico, <span>(family da Ponte)</span></a></li>
												<li><a href="#">Bazille, <span>Frédéric</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">m</div>
								<div class="inner">
										<ul>
												<li><a href="#">Cabanel, <span>Alexandre</span></a></li>
												<li><a href="#">Caillebotte, <span>Gustave</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
												<li><a href="#">Cabanel, <span>Alexandre</span></a></li>
												<li><a href="#">Caillebotte, <span>Gustave</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
												<li><a href="#">Campin, <span>Robert</span></a></li>
												<li><a href="#">Cano, <span>Alonso</span></a></li>
												<li><a href="#">Caravaggio, <span>Michelangelo</span></a></li>
												<li><a href="#">Cassatt, <span>Mary</span></a></li>
												<li><a href="#">Cavallini, <span>Pietro</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
						<div class="item">
								<div class="heading">z</div>
								<div class="inner">
										<ul>
												<li><a href="#">Aertsen, <span>Pieter</span></a></li>
												<li><a href="#">Altdorfer, <span>Albrecht</span></a></li>
												<li><a href="#">Altichiero</a></li>
												<li><a href="#">Angelico, <span>Fra</span></a></li>
												<li><a href="#">Ast, <span>Balthasar van der</span></a></li>
												<li><a href="#">Astruc, <span>Zacharie</span></a></li>
												<li><a href="#">Avercamp, <span>Hendrick</span></a></li>
										</ul>
								</div>
								<a href="#" class="more icon-angle-down">more</a>
						</div>
				</div>
				<!--/artist-list-->

				<!--people-list-->
				<div class="people-list">
						<ul>
								<li>
										<h3><a href="#"><span>Aertsen</span>, Jone</a></h3>
										<h4>OPERATIONS MANAGER</h4>
								</li>
								<li>
										<h3><a href="#"><span>Felichita</span>, Anna</a></h3>
										<h4>HEAD OF COMMUNICATIONS</h4>
								</li>
								<li>
										<h3><a href="#"><span>Gould</span>, Frank</a></h3>
										<h4>ARCHITECT &amp; ARTISTIC PROGRAMMING</h4>
								</li>
								<li>
										<h3><a href="#"><span>Ford</span>, Angelico</a></h3>
										<h4>PROJECT MANAGER CHART DESIGN</h4>
								</li>
								<li>
										<h3><a href="#"><span>Aertsen</span>, Jone</a></h3>
										<h4>OPERATIONS MANAGER</h4>
								</li>
								<li>
										<h3><a href="#"><span>Felichita</span>, Anna</a></h3>
										<h4>HEAD OF COMMUNICATIONS</h4>
								</li>
								<li>
										<h3><a href="#"><span>Gould</span>, Frank</a></h3>
										<h4>ARCHITECT &amp; ARTISTIC PROGRAMMING</h4>
								</li>
						</ul>
				</div>
				<!--/people-list-->

				<!--artist-details-->
				<div class="artist-details">
						<div class="info-area">
								<!-- <figure style="background-image: url(dist/images/artist-01.jpg);"></figure> -->
								<div class="description">
										<div class="back"><a href="#" class="icon-left">Back to the list</a></div>
										<h2>Pieter Stevens</h2>
										<div class="text-content">
												<div class="text">
														<p>Born 1975</p>
														<p>Balthasar van der Ast was born in Middelburg. The date of his birth
																is
																not
																recorded, but legal documents indicate that Balthasar reached the
																age of
																maturity (twenty-five) between June 30, 1618, and September 13,
																1619. He
																had
																been orphaned when his father, Hans, a wealthy widower, died in
																1609.
																Balthasar then may have lived with his older sister Maria and her
																husband,
																the still-life painter Ambrosius Bosschaert (Dutch, 1573 - 1621),
																whose
																work
																had an impact on the precise technique and symmetrical compositions
																of
																Van
																der Ast’s early paintings. Van der Ast seems to have accompanied his
																brother-in-law when he moved from Middelburg to Bergen op Zoom in
																1615
																and
																then to Utrecht the following year.
																In 1619 Van der Ast joined the Saint Luke’s Guild in Utrecht. While
																there he
																probably trained Bosschaert’s three sons after their father died in
																1621. He
																also taught Jan Davidsz de Heem (Dutch, 1606 - 1684). Influenced by
																the
																Utrecht painter Roelandt Savery (Dutch, 1576 - 1639), Van der Ast
																began
																to
																paint in a softer, more atmospheric manner and to animate his still
																lifes
																with small animals and insects. In 1632 he moved to Delft and joined
																the
																Saint Luke’s Guild there. Although most of his still lifes are
																modest in
																scale, he painted a number of larger canvases during his Delft
																period
																that
																reflect a looser style. Van der Ast married Margrieta Jans van
																Buijeren
																in
																Delft on February 26, 1633; the couple had two children. Van der Ast
																died in
																December 1657 and was buried in the Oude Kerk in Delft.</p>
												</div>
										</div>
								</div>
								<div class="bottom-buttons">
										<a href="#" class="link more">Read More</a>
										<div class="share">
												<a href="#" class="icon-share">Share</a>
												<ul>
														<li><a href="#" class="icon-facebook"></a></li>
														<li><a href="#" class="icon-twitter"></a></li>
												</ul>
										</div>
								</div>
						</div>
						<!--/info-area-->
						<div class="collection-wrap">
								<ul class="collection-gallery collection-slider">
										<li>
												<div class="item">
														<figure>
																<!-- <a href="#"
																		style="background-image: url(dist/images/collection-1.jpg);"></a> -->
														</figure>
														<h3><a href="#">Philip Guston</a></h3>
														<h4><a href="#">A Major Bequest of American Paintings</a></h4>
														<span class="date">Date: 1989</span>
														<span class="category">Sculpture</span>
												</div>
										</li>
										<li>
												<div class="item">
														<figure>
																<!-- <a href="#"
																		style="background-image: url(dist/images/collection-2.jpg);"></a> -->
														</figure>
														<h3><a href="#">Pieter Stevens</a></h3>
														<h4><a href="#">A Major Bequest of American Paintings</a></h4>
														<span class="date">Date: 1989</span>
														<span class="category">Painting</span>
												</div>
										</li>
										<li>
												<div class="item">
														<figure>
																<!-- <a href="#"
																		style="background-image: url(dist/images/collection-3.jpg);"></a> -->
														</figure>
														<h3><a href="#">Christopher Dresser</a></h3>
														<h4><a href="#">Claret Pitcher</a></h4>
														<span class="date">Date: 1876</span>
														<span class="category">Drawing</span>
												</div>
										</li>
										<li>
												<div class="item">
														<figure>
																<!-- <a href="#"
																		style="background-image: url(dist/images/collection-4.jpg);"></a> -->
														</figure>
														<h3><a href="#">Georges-Pierre Seurat</a></h3>
														<h4><a href="#">The Bather</a></h4>
														<span class="date">Date: 4th–5th century</span>
														<span class="category">Photography</span>
												</div>
										</li>
										<li>
												<div class="item">
														<figure>
																<!-- <a href="#"
																		style="background-image: url(dist/images/collection-5.jpg);"></a> -->
														</figure>
														<h3><a href="#">Georges-Pierre Seurat</a></h3>
														<h4><a href="#">The Bather</a></h4>
														<span class="date">Date: 4th–5th century</span>
														<span class="category">Photography</span>
												</div>
										</li>
										<li>
												<div class="item">
														<figure>
																<!-- <a href="#"
																		style="background-image: url(dist/images/collection-6.jpg);"></a> -->
														</figure>
														<h3><a href="#">Philip Guston</a></h3>
														<h4><a href="#">A Major Bequest of American Paintings</a></h4>
														<span class="date">Date: 1989</span>
														<span class="category">Painting</span>
												</div>
										</li>
										<li>
												<div class="item">
														<figure>
																<!-- <a href="#"
																		style="background-image: url(dist/images/collection-7.jpg);"></a> -->
														</figure>
														<h3><a href="#">Georges-Pierre Seurat</a></h3>
														<h4><a href="#">The Bather</a></h4>
														<span class="date">Date: 4th–5th century</span>
														<span class="category">Photography</span>
												</div>
										</li>
								</ul>
						</div>
				</div>
				<!--/artist-details-->



			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageTabsNav from '@/components/PageTabsNav'
export default {
	name: 'Collection-Artists',
	components: {
		PageTabsNav
	},
	async asyncData({ app, error }) {
		await app.store.dispatch("getArtists");
	},
	computed: {
		...mapGetters([
			'artists'
		])
	}
}
</script>
