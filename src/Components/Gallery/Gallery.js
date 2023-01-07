import React, { Component } from 'react';
import './Gallery.css';

export class Gallery extends Component {
    render() {
        return (
            <div id="gallery" className="gallery">
                <div className="container">
                    <h2 className="h2-responsive fw-bold text-center my-2">
                        Gallery
                    </h2>
                    <h3 className="h3-responsive fw-bold text-center my-2 section-heading">
                        2022-23
                      </h3>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card">
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner gallery">
                                        <div class="carousel-item active">
                                            <img src="https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/322874169_483038080434588_4040936443866052575_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3xFR4MRl5LAAX8vRkcq&_nc_ht=scontent.fbho1-1.fna&oh=00_AfCneEnTRFtDCrFvnKPkdnjEZ2RKGcifPj7gZHVJbASD8g&oe=63BF3FDE" class="d-block w-100" alt="image" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/321677769_3234848220108710_3279689818960476364_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=03_m3F0CipQAX8K1S5t&_nc_ht=scontent.fbho1-2.fna&oh=00_AfAuiN1WekIHoiHE3VK8ZqcKbbaNPOTIHyr3qq_ULve_-g&oe=63BEF301" class="d-block w-100" alt="image" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/322400509_2491831000972548_1693187446523969202_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PX655-N_YXEAX_7NW8N&_nc_ht=scontent.fbho1-4.fna&oh=00_AfDiOgFFANtU67gmtSJA6bPJVdEeO5IhDmMIJRNOIvJaJw&oe=63BEC792" class="d-block w-100" alt="image" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">New Year</h5>
                                    <p class="card-text">To give an auspicious start to the new year and seek divine blessings of the Almighty, Gyan Mandir School iorganised a special havan on 2nd January, 2023. Mr Aman Raj Chaudhary, was the Yajman on the occasion.</p>
                                    <a href="https://www.facebook.com/profile.php?id=100063686962886" class="btn btn-primary">See More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card">
                                <div id="carouselExampleIndicatorsq" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicatorsq" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicatorsq" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicatorsq" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/321656048_1847789838954301_4163120303471368291_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UKV9LAicnB8AX-SI8KA&_nc_ht=scontent.fbho1-3.fna&oh=00_AfD7aizsJVgZDeJ8YlsRncCryC4Q8O6gQsnwkNF4eTNfBw&oe=63BEB2ED" class="d-block w-100" alt="image" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/321514051_6123380604340135_8376382331011467209_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8GgL0gLtFNoAX_KvJ8b&_nc_ht=scontent.fbho1-3.fna&oh=00_AfD91IWHvqU_yAahsASj6Zv95m8f9GtGQusFo4BSeWOJ_A&oe=63BF22C8" class="d-block w-100" alt="image" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/321956127_2126883937497894_5354195618961230051_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rsWnHbGrJtYAX-Cvren&_nc_oc=AQlg-858FFAmE8WdTsFDQ14UJUy9FFzdD4cwJhepgBRxaI3xMeNQXIBpAMNv5_Ikoy6ZeEbCp836JdR68hhNWZzm&_nc_ht=scontent.fbho1-2.fna&oh=00_AfBrYJHNp3qHLTKZAnwo1SU2JyCOWnresnF0q8n-h-Jbtw&oe=63BD76AE" class="d-block w-100" alt="image" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsq" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsq" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Christmas</h5>
                                    <p class="card-text">Christmas🌲❄☃️ is also a great time to teach kids 👫to be thankful for the bigger things in life. The holidays are a great opportunity to give to those less fortunate and talk to your kids about all the things they have that they are grateful for🙏.</p>
                                    <a href="https://www.facebook.com/profile.php?id=100063686962886" class="btn btn-primary">See More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card">
                                <div id="carouselExampleIndicatorsw" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicatorsw" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicatorsw" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicatorsw" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/314064790_549195687213325_7204591794412870892_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u3Y-hCULfH8AX9N834c&_nc_ht=scontent.fbho1-1.fna&oh=00_AfC-NaX-WUB9jXNDzuKmOPaH1xrlrVDXvZR4MOXmmO5zSw&oe=63BDC6E3" class="d-block w-100" alt="image" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/314659776_549195787213315_700589129823076456_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=C41hVy1DJsUAX9j51e_&_nc_ht=scontent.fbho1-3.fna&oh=00_AfAPHPUDII9heBj-YoGTivV5wx1OkbvI0RcknoZmj-BzSg&oe=63BE6B49" class="d-block w-100" alt="image" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/315404937_549196453879915_396252027007001498_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-kXzOYTN8VEAX_dBPFb&_nc_ht=scontent.fbho1-4.fna&oh=00_AfAkAShcQ2c0i3Z5cfh55fnmFAmc040UoDrS0CgfYyKg3g&oe=63BF0D82" class="d-block w-100" alt="image" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsw" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsw" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Children's Day</h5>
                                    <p class="card-text">Children's Day👫 is celebrated across India to raise awareness about the rights, education, and welfare of children. It is celebrated on 14 November every year on the birthday of the first Prime Minister Pandit Jawaharlal Nehru, who was known to have been fond of children. </p>
                                    <a href="https://www.facebook.com/profile.php?id=100063686962886" class="btn btn-primary">See More</a>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        )
    }
}

export default Gallery
