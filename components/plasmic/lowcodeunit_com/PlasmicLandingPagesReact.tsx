// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bNJjNc2NbC4jfBdycy75o8
// Component: cJqBW9FtQjg
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
import sty from "./PlasmicLandingPagesReact.module.css"; // plasmic-import: cJqBW9FtQjg/css

import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: MwxVTyBYf-O_/icon
import HammerIcon from "../landing_page_starter/icons/PlasmicIcon__Hammer"; // plasmic-import: ePabL_LXTnk1/icon
import TargetIcon from "../landing_page_starter/icons/PlasmicIcon__Target"; // plasmic-import: EMtLeGl57bmd/icon
import FastIcon from "../landing_page_starter/icons/PlasmicIcon__Fast"; // plasmic-import: WqD9rzKB0T2b/icon
import StrongIcon from "../landing_page_starter/icons/PlasmicIcon__Strong"; // plasmic-import: FK_DHr1NmIMb/icon
import CheckIcon from "../landing_page_starter/icons/PlasmicIcon__Check"; // plasmic-import: ilXNZMoWvbmT/icon

export type PlasmicLandingPagesReact__VariantMembers = {};

export type PlasmicLandingPagesReact__VariantsArgs = {};
type VariantPropType = keyof PlasmicLandingPagesReact__VariantsArgs;
export const PlasmicLandingPagesReact__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLandingPagesReact__ArgsType = {};
type ArgPropType = keyof PlasmicLandingPagesReact__ArgsType;
export const PlasmicLandingPagesReact__ArgProps = new Array<ArgPropType>();

export type PlasmicLandingPagesReact__OverridesType = {
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

export interface DefaultLandingPagesReactProps {}

function PlasmicLandingPagesReact__RenderFunc(props: {
  variants: PlasmicLandingPagesReact__VariantsArgs;
  args: PlasmicLandingPagesReact__ArgsType;
  overrides: PlasmicLandingPagesReact__OverridesType;

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
          {"LowCodeUnit - React Development & Deployments in record time"}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={
            "LowCodeUnit - React Development & Deployments in record time"
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
            className={classNames(projectcss.all, sty.freeBox__hqOkq)}
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
                  sty.text__jUpnb
                )}
              >
                {"React Deployments\nwith LowCodeUnit"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__miodc
                )}
              >
                {
                  "Create, build, and deploy your next React app with LowCodeUnit"
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
                src: "/plasmic/lowcodeunit_com/images/image12.png",
                fullWidth: 1200,
                fullHeight: 848,
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
              <div className={classNames(projectcss.all, sty.columns__kgUav)}>
                <div className={classNames(projectcss.all, sty.column__kL90E)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__oxh9F)}
                    color={"darkGray" as const}
                    link={"/dashboard" as const}
                  >
                    {"Get started for free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__eLc4)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___7OLw5
                    )}
                    component={Link}
                    href={"/docs/guides/deploying/frameworks/react" as const}
                    platform={"nextjs"}
                  >
                    {"Learn more >"}
                  </p.PlasmicLink>
                </div>
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.columns__vnxGl)}>
              <div className={classNames(projectcss.all, sty.column__shhH)}>
                <div className={classNames(projectcss.all, sty.freeBox__mEu9M)}>
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
                      sty.text__woRSa
                    )}
                  >
                    {
                      "Get started now following the simple React deployment guide, have React hosted on your domain in minutes."
                    }
                  </div>
                </div>

                <p.PlasmicLink
                  className={classNames(
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ljMe4
                  )}
                  component={Link}
                  href={"/docs/guides/deploying/frameworks/react" as const}
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
                className={classNames(projectcss.all, sty.freeBox__nimqy)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__x5G3U)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Why deploy React?"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__za7Sw
                  )}
                >
                  {
                    "A JavaScript library for building user interfaces.\n\nReact makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.\n\nEBuild encapsulated components that manage their own state, then compose them to make complex UIs.\n\nSince component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__i2Veo)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__r0Hgo)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__jtOq)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__fXh6D
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__f4DBd
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
                              sty.svg__z7Gsg
                            )}
                            role={"img"}
                          />
                        }
                        title={"Harder"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__zwArV)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__nbT3K
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__yg6Pr
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
                              sty.svg__w2Bl
                            )}
                            role={"img"}
                          />
                        }
                        title={"Better"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column___4I1RX)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__kHiI
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___7VXx9
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
                              sty.svg__bhb3W
                            )}
                            role={"img"}
                          />
                        }
                        title={"Faster"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__jeltc)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__geY1E
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___4JaHc
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
                              sty.svg___2Nmth
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

              <div className={classNames(projectcss.all, sty.columns__lRzfj)}>
                <div className={classNames(projectcss.all, sty.column___7ICn)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__mv14X)}
                    color={"darkGray" as const}
                    link={"/dashboard" as const}
                  >
                    {"Get started for free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__x99Ta)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__ifhBl
                    )}
                    component={Link}
                    href={"/docs/guides/deploying/frameworks/react" as const}
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
              className={classNames(projectcss.all, sty.freeBox__vpV86)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eWPxV)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mMZeN)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qcysl)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ztnn
                      )}
                    >
                      {"Pricing plans"}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mEOpf
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
                  className={classNames(projectcss.all, sty.freeBox__eE1PU)}
                >
                  <PriceCard
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__fPl3A
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__qeVUy
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__y43Jp
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__muGj5
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___8QG0V
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
                          sty.text__c82UF
                        )}
                      >
                        {"Buy Pro"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__mNd2P
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___8TfL
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__hTc1Y
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__yuEoS
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__oErM3
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__x6Xux
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__c123O
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
                          sty.text__z1HLo
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
                          sty.text__flE52
                        )}
                      >
                        {"Buy Team"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__f4E2T
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__uzkzm
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__vmKnC
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__vd8AV
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__fqbwk
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__bXfxm
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__ypbY
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__ipej
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__msDUv
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
                          sty.text__evfrk
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
                          sty.text__uoPxa
                        )}
                      >
                        {"Contact us"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__vVidt
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__s1WGt
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__kmzbU
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__xo6Lk
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__t9Cq8
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__kx9Lm
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__e2OnK
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___0EluE
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__w0EL0
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
                          sty.text__vf6B9
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
  PlasmicLandingPagesReact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLandingPagesReact__VariantsArgs;
    args?: PlasmicLandingPagesReact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLandingPagesReact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLandingPagesReact__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLandingPagesReact__ArgProps,
      internalVariantPropNames: PlasmicLandingPagesReact__VariantProps
    });

    return PlasmicLandingPagesReact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingPagesReact";
  } else {
    func.displayName = `PlasmicLandingPagesReact.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingPagesReact = Object.assign(
  // Top-level PlasmicLandingPagesReact renders the root element
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

    // Metadata about props expected for PlasmicLandingPagesReact
    internalVariantProps: PlasmicLandingPagesReact__VariantProps,
    internalArgProps: PlasmicLandingPagesReact__ArgProps
  }
);

export default PlasmicLandingPagesReact;
/* prettier-ignore-end */
