// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bNJjNc2NbC4jfBdycy75o8
// Component: rXmmYC1OnQW
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: ThexOuedbks1/component
import Button from "../../Button"; // plasmic-import: 9tG1OyZAVIis/component
import ValueProp from "../../ValueProp"; // plasmic-import: 7Osq_1lpBJMp/component
import PriceCard from "../../PriceCard"; // plasmic-import: 7SzxSSEbWsst/component
import FooterSection from "../../FooterSection"; // plasmic-import: iXxSJX956e4d/component

import { useScreenVariants as useScreenVariantsxs8LqfxZhwLy } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: XS8lqfxZhwLY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: bNJjNc2NbC4jfBdycy75o8/projectcss
import sty from "./PlasmicLandingPagesAngular.module.css"; // plasmic-import: rXmmYC1OnQW/css

import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: MwxVTyBYf-O_/icon
import HammerIcon from "../landing_page_starter/icons/PlasmicIcon__Hammer"; // plasmic-import: ePabL_LXTnk1/icon
import TargetIcon from "../landing_page_starter/icons/PlasmicIcon__Target"; // plasmic-import: EMtLeGl57bmd/icon
import FastIcon from "../landing_page_starter/icons/PlasmicIcon__Fast"; // plasmic-import: WqD9rzKB0T2b/icon
import StrongIcon from "../landing_page_starter/icons/PlasmicIcon__Strong"; // plasmic-import: FK_DHr1NmIMb/icon
import CheckIcon from "../landing_page_starter/icons/PlasmicIcon__Check"; // plasmic-import: ilXNZMoWvbmT/icon

export type PlasmicLandingPagesAngular__VariantMembers = {};

export type PlasmicLandingPagesAngular__VariantsArgs = {};
type VariantPropType = keyof PlasmicLandingPagesAngular__VariantsArgs;
export const PlasmicLandingPagesAngular__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLandingPagesAngular__ArgsType = {};
type ArgPropType = keyof PlasmicLandingPagesAngular__ArgsType;
export const PlasmicLandingPagesAngular__ArgProps = new Array<ArgPropType>();

export type PlasmicLandingPagesAngular__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultLandingPagesAngularProps {}

function PlasmicLandingPagesAngular__RenderFunc(props: {
  variants: PlasmicLandingPagesAngular__VariantsArgs;
  args: PlasmicLandingPagesAngular__ArgsType;
  overrides: PlasmicLandingPagesAngular__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxs8LqfxZhwLy()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {"LowCodeUnit - Angular Development & Deployments in record time"}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={
            "LowCodeUnit - Angular Development & Deployments in record time"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__p0Kg0)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c8ASj
                )}
              >
                {"Angular Deployments\nwith LowCodeUnit"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wZxwY
                )}
              >
                {
                  "Create, build, and deploy your next Angular app with LowCodeUnit"
                }
              </div>
            </p.Stack>

            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"293px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/lowcodeunit_com/images/image13.png",
                fullWidth: 800,
                fullHeight: 800,
                aspectRatio: undefined
              }}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <div className={classNames(projectcss.all, sty.columns__zgGcw)}>
                <div className={classNames(projectcss.all, sty.column__yFnZ8)}>
                  <Button
                    className={classNames("__wab_instance", sty.button___1YUvP)}
                    color={"darkGray" as const}
                    link={"/dashboard" as const}
                  >
                    {"Get started for free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__j6Kro)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___7UiOo
                    )}
                    component={Link}
                    href={"/docs/guides/deploying/frameworks/angular" as const}
                    platform={"nextjs"}
                  >
                    {"Learn more >"}
                  </p.PlasmicLink>
                </div>
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.columns__lnujU)}>
              <div className={classNames(projectcss.all, sty.column___5SgkD)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___1FeX9)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Do it Yourself"}
                  </h1>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oSMss
                    )}
                  >
                    {
                      "Get started now following the simple Angular deployment guide, have Angular hosted on your domain in minutes."
                    }
                  </div>
                </div>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__jY8S
                  )}
                  component={Link}
                  href={"/docs/guides/deploying/frameworks/angular" as const}
                  platform={"nextjs"}
                >
                  {"Read Documentation >"}
                </p.PlasmicLink>
              </div>
            </div>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ho0Wm)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__mivhc)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Why deploy Angular?"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__duLb7
                  )}
                >
                  {
                    "The modern web developers platform.\n\nLearn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.\n\nAchieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.\n\nAngular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.\n\nBuild features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__tGPmx)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__pizd)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__wdFfW)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__vcwlQ
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__z80Qd
                            )}
                          >
                            {
                              "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                            }
                          </div>
                        }
                        icon={
                          <HammerIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__oDwyE
                            )}
                            role={"img"}
                          />
                        }
                        title={"Harder"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column___5Bnt2)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__kevAh
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__yr9Tg
                            )}
                          >
                            {
                              "Consequat scelerisque a eros taciti nisl a sodales."
                            }
                          </div>
                        }
                        icon={
                          <TargetIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__mFuWw
                            )}
                            role={"img"}
                          />
                        }
                        title={"Better"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__tas0A)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__s9BH
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fqJu1
                            )}
                          >
                            {
                              "Varius ad malesuada ullamcorper cursus scelerisque a a."
                            }
                          </div>
                        }
                        icon={
                          <FastIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wsnjs
                            )}
                            role={"img"}
                          />
                        }
                        title={"Faster"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__tjppw)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___4Th2B
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___4DURp
                            )}
                          >
                            {
                              "Ut eu nam nostra taciti congue adipiscing curabitur."
                            }
                          </div>
                        }
                        icon={
                          <StrongIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__zsq0U
                            )}
                            role={"img"}
                          />
                        }
                        title={"Stronger"}
                        vertical={true}
                      />
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>

              <div className={classNames(projectcss.all, sty.columns__vetU7)}>
                <div className={classNames(projectcss.all, sty.column___9CkNu)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__jHin4)}
                    color={"darkGray" as const}
                    link={"/dashboard" as const}
                  >
                    {"Get started for free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column___13N8S)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__q7I4K
                    )}
                    component={Link}
                    href={"/docs/guides/deploying/frameworks/angular" as const}
                    platform={"nextjs"}
                  >
                    {"Learn more >"}
                  </p.PlasmicLink>
                </div>
              </div>
            </p.Stack>
          </section>

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wlkhJ)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yMvre)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__q7SLk)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox___1Kl8O)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pVzRf
                      )}
                    >
                      {"Pricing plans"}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__af80S
                    )}
                  >
                    {
                      "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___9X4Rb)}
                >
                  <PriceCard
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__uoUpb
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__xvSh5
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__opbZf
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__gnokw
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__kpZv5
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"0"}
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hB2
                        )}
                      >
                        {"Buy Pro"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__wsGyy
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__eTwKz
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__fpRIk
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__ei9F8
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__zCkrs
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__dTtgk
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__t6Ewy
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"8"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ztvsa
                        )}
                      >
                        {"Pro"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zppLq
                        )}
                      >
                        {"Buy Team"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__pyIAa
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__nDbVg
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__p2UyH
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__gs9On
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__t4AiZ
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__bwxTo
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__uq1Gf
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__qaKSn
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__etyXj
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"16"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wPrBz
                        )}
                      >
                        {"Team"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__e0WFe
                        )}
                      >
                        {"Contact us"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__ehmJ2
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__wSoa
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__y9Gq5
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__tmobF
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__o2Az4
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__aoQ61
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___6HosQ
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___5VoB
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__ew96T
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"?"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__x8UaC
                        )}
                      >
                        {"Enterprise"}
                      </div>
                    }
                    primary={true}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "img",
    "foreground2",
    "h1",
    "section",
    "foreground3",
    "h2",
    "footerSection"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  img: ["img"],
  foreground2: ["foreground2"],
  h1: ["h1"],
  section: ["section", "foreground3", "h2"],
  foreground3: ["foreground3", "h2"],
  h2: ["h2"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  img: typeof p.PlasmicImg;
  foreground2: "div";
  h1: "h1";
  section: "section";
  foreground3: "div";
  h2: "h2";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLandingPagesAngular__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLandingPagesAngular__VariantsArgs;
    args?: PlasmicLandingPagesAngular__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLandingPagesAngular__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLandingPagesAngular__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLandingPagesAngular__ArgProps,
      internalVariantPropNames: PlasmicLandingPagesAngular__VariantProps
    });

    return PlasmicLandingPagesAngular__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingPagesAngular";
  } else {
    func.displayName = `PlasmicLandingPagesAngular.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingPagesAngular = Object.assign(
  // Top-level PlasmicLandingPagesAngular renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    img: makeNodeComponent("img"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicLandingPagesAngular
    internalVariantProps: PlasmicLandingPagesAngular__VariantProps,
    internalArgProps: PlasmicLandingPagesAngular__ArgProps
  }
);

export default PlasmicLandingPagesAngular;
/* prettier-ignore-end */
