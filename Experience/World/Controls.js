import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


export default class Controls
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        this.room.children.forEach(child => {
            if(child.type = "RectAreaLight" )
            {
                this.rectLight = child;
            }
        });
        GSAP.registerPlugin(ScrollTrigger);

        this.setScrollTrigger();


        // this.progress = 0;
        // this.dummyCurve = new THREE.Vector3(0,0,0);
        

        // this.lerp = 
        // {
        //     current: 0,
        //     target: 0,
        //     ease: 0.1,
        // };

        // this.position = new THREE.Vector3(0,0,0);
        // this.lookAtPossition = new THREE.Vector3(0,0,0);

        // this.directionalVector = new THREE.Vector3(0,0,0);
        // this.staticVector = new THREE.Vector3(0,1,0);
        // this.crossVector = new THREE.Vector3(0,0,0);
        

        // this.setScrollTrigger();
        // this.onWheel();
    }

    setScrollTrigger()
    {
    //     this.timeline = new GSAP.timeline();
    //     this.timeline.to(this.room.position,{
    //         x: () => {
    //             return this.sizes.width * 0.0012;
    //         },
    //         scrollTrigger:
    //         {
    //             trigger: ".first-move",
    //             markers: true,
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 0.6,
    //             invalidateOnRefresh: true,
    //         }
    //     });
    //    // console.log(this.room);

        let mm = GSAP.matchMedia();

        //Desktop

        mm.add("(min-width: 969px)", () => 
        {
            // desktop setup code here...
            console.log("fired desktop")
            this.room.scale.set(0.11, 0.11, 0.11);
            this.rectLight.width = 0.5;
            this.rectLight.height = 0.7;
            //First section -----------------------------------------
            this.firstMoveTimeline = new GSAP.timeline({
                scrollTrigger: {
                    trigger: ".first-move",
                    start: "top top ",
                    end : "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true, 
                },
            });
            this.firstMoveTimeline.to(this.room.position, 
            {
                x: () => {
                    return this.sizes.width * 0.0014;
                },
            });

            //Second section -----------------------------------------
            this.secondMoveTimeline = new GSAP.timeline({
                scrollTrigger: {
                    trigger: ".second-move",
                    start: "top top ",
                    end : "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true, 
                },
            });
            this.secondMoveTimeline.to(this.room.position, 
            {
                x: () => {
                    return 1;
                },
                z: () =>
                {
                    return this.sizes.height * 0.0032;
                }
            }, "same");
            this.secondMoveTimeline.to(this.room.scale , 
            {
                x: 0.4,
                y: 0.4,
                z: 0.4,
            }, "same");

            this.secondMoveTimeline.to(this.rectLight, 
            {
               width: 0.5 * 4,
               height: 0.7 *4,
            }, "same");    

            //Third section -----------------------------------------

            this.thirdMoveTimeline = new GSAP.timeline(
            {
                scrollTrigger: 
                {
                    trigger: ".third-move",
                    start: "top top ",
                    end : "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true, 
                 },
            });

            this.thirdMoveTimeline.to(this.camera.orthographicCamera.position, 
            {
                y: - 1.5,
                x: - 3.1,
            });

            this.secondPartTimeline = new GSAP.timeline(
                {
                    scrollTrigger: 
                    {
                        trigger: ".third-move",
                        start: "center center",
                        
                    },
                });
    
                this.room.children.forEach((child) => 
                {
                    if(child.name == "Mini_Floor")
                    {
                       this.first =  GSAP.to(child.position, 
                            {
                                x : -5.44055,
                                z: 13.6135,
                                duration: 0.3,
                            });
                    }
    
                    if(child.name === "Mailbox")
                    {
                       this.second = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
                    if(child.name === "Lamp")
                    {
                        this.third = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
    
                    if(child.name === "FloorFirst")
                    {
                        this.fourth = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
    
                    if(child.name === "FloorSecond")
                    {
                        this.fifth = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
    
                    if(child.name === "FloorThird")
                    {
                        this.sixth = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
    
                    if(child.name === "Dirt")
                    {
                        this.seventh = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
    
                    if(child.name === "Flower1")
                    {
                        this.eighth = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
    
                    if(child.name === "Flower2")
                    {
                        this.ninth = GSAP.to(child.scale, 
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                duration: 0.3,
                            });
                    }
                }) 
                this.secondPartTimeline.add(this.first);
                this.secondPartTimeline.add(this.second);
                this.secondPartTimeline.add(this.third);
                this.secondPartTimeline.add(this.fourth, "-=0.2");
                this.secondPartTimeline.add(this.fifth, "-=0.2");
                this.secondPartTimeline.add(this.sixth, "-=0.2");
                this.secondPartTimeline.add(this.seventh, "-=0.2");
                this.secondPartTimeline.add(this.eighth);
                this.secondPartTimeline.add(this.ninth, "-=0.1");
        }),

        //Mobile  
        mm.add("(max-width: 968px)", () => 
        {
            // mobile setup code here...
            console.log("fired mobile");

            //Resets
            this.room.scale.set(0.07, 0.07, 0.07)
            this.room.position.set(0,0,0);

            //First section -----------------------------------------
            this.firstMoveTimeline = new GSAP.timeline(
            {
                scrollTrigger: 
                {
                    trigger: ".first-move",
                    start: "top top ",
                    end : "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true, 
                },
            }).to(this.room.scale, 
                {
                    x: 0.1,
                    y: 0.1,
                    z: 0.1
                });

            //Second section -----------------------------------------
            this.secondMoveTimeline = new GSAP.timeline(
            {
                scrollTrigger: {
                    trigger: ".second-move",
                    start: "top top ",
                    end : "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true, 
                },
            }).to(this.room.scale, 
                {
                    x: 0.25,
                    y: 0.25,
                    z: 0.25,
                },"same").to(this.rectLight, 
                    {
                        width: 0.3 * 3.4,
                        height: 0.4 * 3.4,
                    },"same").to(this.room.position,{
                        x: 1.5,
                    },"same");

            //Third section -----------------------------------------

            this.thirdMoveTimeline = new GSAP.timeline(
            {
                scrollTrigger: 
                {
                    trigger: ".third-move",
                    start: "top top ",
                    end : "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true, 
                },
            });
            this.thirdMoveTimeline.to(this.camera.orthographicCamera.position, 
                {
                    y: - 1.5,
                    x: - 0.1,
                    z: 0,
                },"same");

            this.secondPartTimeline = new GSAP.timeline(
            {
                scrollTrigger: 
                {
                    trigger: ".third-move",
                    start: "center center",
                    
                },
            });

            this.room.children.forEach((child) => 
            {
                if(child.name == "Mini_Floor")
                {
                   this.first =  GSAP.to(child.position, 
                        {
                            x : -5.44055,
                            z: 13.6135,
                            duration: 0.3,
                        });
                }

                if(child.name === "Mailbox")
                {
                   this.second = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }
                if(child.name === "Lamp")
                {
                    this.third = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }

                if(child.name === "FloorFirst")
                {
                    this.fourth = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }

                if(child.name === "FloorSecond")
                {
                    this.fifth = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }

                if(child.name === "FloorThird")
                {
                    this.sixth = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }

                if(child.name === "Dirt")
                {
                    this.seventh = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }

                if(child.name === "Flower1")
                {
                    this.eighth = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }

                if(child.name === "Flower2")
                {
                    this.ninth = GSAP.to(child.scale, 
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                }
            }) 
            this.secondPartTimeline.add(this.first);
            this.secondPartTimeline.add(this.second);
            this.secondPartTimeline.add(this.third);
            this.secondPartTimeline.add(this.fourth, "-=0.2");
            this.secondPartTimeline.add(this.fifth, "-=0.2");
            this.secondPartTimeline.add(this.sixth, "-=0.2");
            this.secondPartTimeline.add(this.seventh, "-=0.2");
            this.secondPartTimeline.add(this.eighth);
            this.secondPartTimeline.add(this.ninth, "-=0.1");
           
        });

    }

    // setPath()
    // {
    //     //Create a closed wavey loop
    //     this.curve = new THREE.CatmullRomCurve3( 
    //     [
    //         new THREE.Vector3( -5, 0, 0 ),
    //         new THREE.Vector3( 0, 0, -5 ),
    //         new THREE.Vector3( 5, 0, 0 ),
    //         new THREE.Vector3( 0, 0, 5),
    //     ], true
    //     );
    //     const points = this.curve.getPoints( 50 );
    //     const geometry = new THREE.BufferGeometry().setFromPoints( points );

    //     const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

    //     // Create the final object to add to the scene
    //     const curveObject = new THREE.Line( geometry, material );

    //     this.scene.add(curveObject);
    // }

    // onWheel()
    // {
    //     window.addEventListener("wheel", (e) =>{
    //         console.log(e);
    //         if(e.deltaY > 0)
    //         {
    //             this.lerp.target += 0.01;
    //             this.back = false;
    //         }
    //         else
    //         {
    //             this.lerp.target -= 0.01;
    //             this.back = true;
    //         }
    //     })
    // }

    resize()
    {

    }

    update()
    {
        // this.lerp.current = GSAP.utils.interpolate(
        //     this.lerp.current,
        //     this.lerp.target,
        //     this.lerp.ease
        // );

        // this.curve.getPointAt(this.lerp.current % 1 ,this.position);
        // this.camera.orthographicCamera.position.copy(this.position);

        // this.directionalVector.subVectors(
        //     this.curve.getPointAt((this.lerp.current%1) + 0.000001), 
        //     this.position
        //     );
        // this.directionalVector.normalize();
        // this.crossVector.crossVectors(
        //     this.directionalVector,
        //     this.staticVector,
        // );
        // this.crossVector.multiplyScalar(100000)
        // this.camera.orthographicCamera.lookAt(this.crossVector);


        // if(this.back)
        // {
        //     this.lerp.target -= 0.001;
        // }
        // else
        // {
        //     this.lerp.target +=0.001;
        // }

        // //this.lerp.target += 0.001;
        // this.lerp.target = GSAP.utils.clamp(0,1, this.lerp.target);
        // this.lerp.current =  GSAP.utils.clamp(0,1,this.lerp.current);
        // this.curve.getPoint(this.lerp.current, this.position);

        // this.curve.getPoint(this.lerp.current+0.00001, this.lookAtPossition);


        // this.camera.orthographicCamera.position.copy(this.position);    
        // this.camera.orthographicCamera.lookAt(this.lookAtPossition);
    }

}