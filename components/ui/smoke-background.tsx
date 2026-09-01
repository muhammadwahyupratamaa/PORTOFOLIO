"use client";

import { useEffect, useRef } from "react";

const vertex = `attribute vec2 p; void main(){gl_Position=vec4(p,0.,1.);}`;
const fragment = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec3 u_colors[8]; uniform vec4 u_scene,u_shape,u_surface,u_finish,u_transform,u_space,u_cursor;
#define u_resolution u_scene.xy
#define u_time u_scene.z
#define u_colorCount u_scene.w
#define u_scale u_shape.x
#define u_intensity u_shape.y
#define u_contrast u_surface.y
#define u_brightness u_surface.z
#define u_saturation u_surface.w
#define u_seed u_transform.x
float hash(vec2 p){p=fract(p*vec2(234.34,435.345));p+=dot(p,p+34.23);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(17.,9.2);a*=.5;}return v;}
vec3 palette(float x){float n=max(u_colorCount-1.,1.),f=clamp(x,0.,1.)*n;vec3 c=u_colors[0];for(int i=0;i<7;i++)if(float(i)<n)c=mix(c,u_colors[i+1],smoothstep(0.,1.,clamp(f-float(i),0.,1.)));return c;}
void main(){vec2 p=(gl_FragCoord.xy-.5*u_resolution)/min(u_resolution.x,u_resolution.y)*u_scale;float w=2.+u_intensity*4.;vec2 q=vec2(fbm(p+u_time*.08),fbm(p+vec2(5.2,1.3)-u_time*.06));vec2 r=vec2(fbm(p+w*q+vec2(1.7,9.2)),fbm(p+w*q+vec2(8.3,2.8)));vec3 c=palette(fbm(p+3.*r+u_seed));c=(c-.5)*u_contrast+.5;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,u_saturation)+u_brightness;gl_FragColor=vec4(clamp(c,0.,1.),1.);}`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source); gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw Error(gl.getShaderInfoLog(shader) ?? "Shader error");
  return shader;
}

export default function SmokeBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current, gl = canvas?.getContext("webgl", { alpha: false });
    if (!canvas || !gl) return;
    let program: WebGLProgram;
    try { program = gl.createProgram()!; gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, vertex)); gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fragment)); gl.linkProgram(program); if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw Error(); } catch { return; }
    gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,3,-1,-1,3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "p"); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const u = (name: string) => gl.getUniformLocation(program, name);
    gl.uniform3fv(u("u_colors[0]"), [.012,.110,.149,.106,.424,.659,.353,.824,.957,.918,.976,1,0,0,0,0,0,0,0,0,0,0,0,0]);
    gl.uniform4f(u("u_shape"), 1.72,.60,.50,0); gl.uniform4f(u("u_surface"), 2.40,1.22,0,1); gl.uniform4f(u("u_finish"),0,0,0,0); gl.uniform4f(u("u_transform"),635,0,0,0); gl.uniform4f(u("u_space"),0,0,0,0); gl.uniform4f(u("u_cursor"),0,2,.65,.46);
    let frame = 0, visible = !document.hidden; const start = performance.now();
    const resize = () => { const dpr=Math.min(devicePixelRatio||1,2),w=Math.round(innerWidth*dpr),h=Math.round(innerHeight*dpr); if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);} };
    const render = (now: number) => { resize(); gl.uniform4f(u("u_scene"),canvas.width,canvas.height,(now-start)/1000*.97,4); gl.drawArrays(gl.TRIANGLES,0,3); if(visible) frame=requestAnimationFrame(render); };
    const onVisibility = () => { visible=!document.hidden; if(visible) frame=requestAnimationFrame(render); else cancelAnimationFrame(frame); };
    addEventListener("resize",resize); document.addEventListener("visibilitychange",onVisibility); frame=requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frame); removeEventListener("resize",resize); document.removeEventListener("visibilitychange",onVisibility); gl.deleteBuffer(buffer); gl.deleteProgram(program); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full" />;
}
